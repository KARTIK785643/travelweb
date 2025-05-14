import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import TourNav from "../../components/navbar/TourNav";
import axios from "axios";

const image = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1582060204600-420bd1a1b2ff?auto=format&fit=crop&w=1350&q=80')", // Replace with an Indian image
  height: "300px",
  backgroundPosition: "50%",
};

const SearchResults = () => {
  const { destination, duration, maxsize } = useParams();
  const [loading, setLoading] = useState(true);
  const [filteredTours, setTour] = useState([]);

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get("/tours");
        const tours = response.data.filter((tour) => {
          return (
            tour.cities.split(",").includes(destination) ||
            tour.duration == duration ||
            tour.groupCount == maxsize
          );
        });
        setTour(tours);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTours();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={image}
        >
          <div className="flex h-full items-center justify-center text-center">
            <div>
              <h2
                className="mb-5 text-6xl font-bold text-black"
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Search Results
              </h2>
              <div>
                <div className="mt-12 w-1/2 mx-auto">
                  <h4
                    className="mt-5 mb-6 text-xl uppercase animate-bounce text-white text-center"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      border: "solid 1px white",
                      textShadow: "3px 1px black",
                    }}
                  >
                    An adventure awaits you <br />
                    Discover Incredible India 🇮🇳
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="bg-grey-light w-full rounded-md pl-20 pt-10">
        <ol className="list-reset flex">
          <li>
            <Link to={"/"} className="text-primary hover:text-primary-600">
              Home
            </Link>
          </li>
          <li>
            <AiOutlineRight className="mt-1 mx-2" />
          </li>
          <li>
            <Link to={"#"} className="text-primary hover:text-primary-600">
              Tour Packages
            </Link>
          </li>
          <li>
            <AiOutlineRight className="mt-1 mx-2" />
          </li>
          <li className="text-neutral-500">Explore India</li>
        </ol>
      </nav>

      <TourNav />

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl mb-10 ml-2">
          Results Found: {filteredTours.length}
        </h1>
        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <div className="bg-white">
            {filteredTours.length !== 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {filteredTours.map((tours) => (
                  <div
                    key={tours._id}
                    className="group relative rounded-t-3xl shadow-2xl rounded-b-xl border-2"
                  >
                    <div className="min-h-80 w-full overflow-hidden rounded-3xl bg-gray-200 lg:h-80">
                      <img
                        src={tours.img}
                        alt="Tour"
                        className="h-full w-full object-cover object-center rounded-3xl"
                      />
                    </div>
                    <div className="mt-4 flex justify-between p-3">
                      <h3 className="text-2xl font-bold text-gray-700">
                        <Link to={`/tours/${tours._id}`}>
                          {tours.name}
                        </Link>
                        <p className="text-lg font-medium text-gray-900">
                          {tours.duration} days
                        </p>
                      </h3>
                    </div>
                    <div className="flex flex-row justify-between items-center px-4 pb-4">
                      <p className="text-sm font-bold">
                        From ₹{tours.price.toLocaleString("en-IN")}
                      </p>
                      <Link to={`/tours/${tours._id}`}>
                        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-lg">No Matching Tours Found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
