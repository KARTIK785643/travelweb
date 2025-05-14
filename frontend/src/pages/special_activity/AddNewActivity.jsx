import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileBase from "react-file-base64";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const ActivityForm = () => {
  const navigate = useNavigate();
  const locationRoute = useLocation();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [activityType, setActivityType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const activity = locationRoute.state?.activity;
    if (activity) {
      setIsEditing(true);
      setName(activity.name);
      setLocation(activity.location);
      setStartDate(new Date(activity.dateRange.startDate));
      setEndDate(new Date(activity.dateRange.endDate));
      setStartTime(activity.timeRange.startTime);
      setEndTime(activity.timeRange.endTime);
      setActivityType(activity.type);
      setDescription(activity.description);
      setImage(activity.image);
    }
  }, [locationRoute.state]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleStartDateChange = (date) => setStartDate(date);
  const handleEndDateChange = (date) => setEndDate(date);

  const handleStartTimeChange = (e) => setStartTime(e.target.value);

  function handleEndTimeChange(event) {
    const selectedEndTime = event.target.value;
    const selectedStartTime = startTime;

    const endDate = new Date(`2000-01-01T${selectedEndTime}`);
    const startDate = new Date(`2000-01-01T${selectedStartTime}`);

    if (endDate <= startDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "End time must be after start time",
      });
      return;
    }
    setEndTime(selectedEndTime);
  }

  const handleActivityTypeChange = (e) => setActivityType(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const validateForm = () => {
    if (!name || !location || !startDate || !endDate || !startTime || !endTime || !activityType || !description) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields.",
      });
      return false;
    }
    if (endDate < startDate) {
      Swal.fire({
        icon: "error",
        title: "Invalid Date Range",
        text: "End date must be after start date.",
      });
      return false;
    }
    return true;
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      
      // Format dates to ISO strings
      const formattedStartDate = startDate.toISOString();
      const formattedEndDate = endDate.toISOString();

      // Get user ID from your auth context or localStorage
      const userId = localStorage.getItem('userId'); // Or from your auth context
      // Example: const { user } = useAuth(); const userId = user._id;

      if (!userId) {
        throw new Error("User not authenticated");
      }

      const activityData = {
        name,
        location,
        dateRange: { 
          startDate: formattedStartDate, 
          endDate: formattedEndDate 
        },
        timeRange: { startTime, endTime },
        type: activityType,
        description,
        image,
        user: userId // Use the actual user ID
      };

      const method = isEditing ? 'put' : 'post';
      const url = isEditing 
        ? `/api/specialActivity/${locationRoute.state?.activity?._id}` 
        : '/api/specialActivity';

      await axios[method](url, activityData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setIsLoading(false);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: `Activity ${isEditing ? 'updated' : 'created'} successfully!`,
      });
      navigate("/my-activities");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.response?.data?.message || error.message || "Something went wrong!",
      });
    }
  };
  return (
    <div className="max-w-3xl mx-auto mt-20" style={{ marginBottom: "20rem" }}>
      <p className="block text-blue-500 font-bold mb-6" style={{ fontSize: "28px" }}>
        {isEditing ? "Edit Activity" : "Create a New Special Activity!"}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Activity name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date-range">
            Date Range
          </label>
          <DatePicker
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={handleStartDateChange}
            selectsStart
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            required
          />
          <DatePicker
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            selected={endDate}
            startDate={startDate}
            endDate={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            dateFormat="yyyy-MM-dd"
            minDate={startDate}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="time-range">
            Time Range
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="start-time"
            type="time"
            value={startTime}
            onChange={handleStartTimeChange}
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            id="end-time"
            type="time"
            value={endTime}
            onChange={handleEndTimeChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="activity-type">
            Activity Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="activity-type"
            value={activityType}
            onChange={handleActivityTypeChange}
            required
          >
            <option value="">Select Activity Type</option>
            <option value="INDOOR">Indoor</option>
            <option value="OUTDOOR">Outdoor</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="4"
            placeholder="Activity description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image
          </label>
          <FileBase
            type="file"
            value={image}
            multiple={false}
            onDone={({ base64 }) => setImage(base64)}
          />
          {image && <img src={image} alt="Preview" style={{ maxWidth: "500px", maxHeight: "400px", marginTop: "10px" }} />}
        </div>
        {isLoading ? (
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled>
            <svg className="animate-spin h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16z"></path>
            </svg>
            Creating Activity...
          </button>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            {isEditing ? "Update Activity" : "Create Activity"}
          </button>
        )}
      </form>
    </div>
  );
};

export default ActivityForm;
