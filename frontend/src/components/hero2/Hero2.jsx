import React from "react";

const Hero2 = () => {
  return (
    <>
      <div className="md:px-36 px-8 md:py-28 py-5">
        <div className="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 justify-center p-5">
            <h1 className="text-4xl md:text-5xl font-bold">Discover</h1>
            <h1 className="text-4xl md:text-5xl font-bold">the Beauty of</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#41A4FF]">
              Incredible India
            </h1>
            <p className="mt-4">
              Experience the vibrant culture, diverse landscapes, and rich heritage of India. 
              From the majestic Himalayas to the serene backwaters of Kerala, India offers 
              an unforgettable journey for every traveler.
            </p>
            <button className="bg-black text-white px-2 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4">
              Explore Now
            </button>
          </div>
          <div className="">
            <img
              src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/01/11201317/Kashmir-Deepanshu-Nayak.jpg?tr=w-1366,f-jpg,pr-true"
              alt="heroimg"
              className="rounded-3xl h-[100%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
