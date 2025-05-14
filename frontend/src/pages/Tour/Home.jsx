import React from "react";

import HeroTour from "./HeroTour";
import HiddenPlaces from "./HiddenPlaces";

import ServiceCard from "./Services/ServiceCard";
import TourCategories from "./Services/ServiceCategories";
import TourNav from "../../components/navbar/TourNav";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import CustomForm from "./Services/CustomForm";

import welcome from "../../assets/Tour/Tour-Welcome.jpg";

const Home = () => {
  return (
    <div>
      <HeroTour />

      {/* Navigated menu start*/}
      <nav className="bg-grey-light w-full rounded-md pl-20 pt-10">
        <ol className="list-reset flex">
          <li>
            <Link
              to={"/"}
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Home
            </Link>
          </li>
          <li>
            <AiOutlineRight className="mt-1 mx-2" />
          </li>
          <li>
            <Link
              to={"#"}
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Tour Packages
            </Link>
          </li>
          <li>
            <AiOutlineRight className="mt-1 mx-2" />
          </li>
          <li className="text-neutral-500 dark:text-neutral-400">
            Explore India
          </li>
        </ol>
      </nav>
      {/* Navigated menu end*/}

      {/* Navigation Tour bar */}
      <TourNav />

      {/* Categories */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* welcome image */}
        <img src={welcome} alt="Welcome to India Tours" />
        <h1 className="text-4xl mt-10 mb-10 ml-2">Tour Categories</h1>
        <TourCategories />
      </div>

      {/* Service Card Brief start */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl mb-10 ml-2">Perfect Picks For You</h1>
        <ServiceCard />
        {/* Uncomment this button if needed */}
        {/* 
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="mt-20 inline-block rounded-xl bg-primary px-6 pb-2 pt-2.5 text-3xl font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none"
          >
            <Link to={"/tourdetails"}>View More</Link>
          </button>
        </div> 
        */}
      </div>
      {/* Service Card Brief end */}

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-black uppercase text-center pt-0 mt-0 text-5xl">
          Can't find the right package <br /> that matches your unique interests <br /> and preferences?
        </h1>
      </div>

      {/* customer form */}
      <div>
        <CustomForm />
      </div>
      <div>
        <HiddenPlaces />
      </div>
    </div>
  );
};

export default Home;
