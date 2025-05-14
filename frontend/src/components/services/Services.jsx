import React from "react";
import { FaHotel, FaTrain } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";

const categories = [
  {
    name: "Luxury & Budget Hotels",
    icon: <FaHotel />,
  },
  {
    name: "Exclusive Tour Packages",
    icon: <MdTour />,
  },
  {
    name: "Car & Bike Rentals",
    icon: <AiFillCar />,
  },
  {
    name: "Train & Rail Reservations",
    icon: <FaTrain />,
  },
  {
    name: "Authentic Indian Cuisine",
    icon: <BiRestaurant />,
  },
  {
    name: "Cultural & Festival Events",
    icon: <BsCalendarEvent />,
  },
];

const Services = () => {
  return (
    <>
      <div className="lg:px-36 lg:pt-5 lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Explore India's Best
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Services
                </h2>
                <p className="text-body-color text-base">
                  Discover India with our premium services – from luxurious hotels to adventure tours, railway bookings, and cultural events, we ensure a seamless travel experience.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 grid lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="mb-8 rounded-[20px] bg-white p-2 shadow-md hover:shadow-lg md:px-7 grid grid-cols-2 justify-center"
              >
                <div className="text-black text-3xl mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  {category.icon}
                </div>
                <h4 className="text-dark mb-3 mt-5 text-lg font-semibold">
                  {category.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;