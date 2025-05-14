import React from "react";
import trainMainImg from "../../assets/TrainImages/HeroTrain.jpg";

const TrainHero = () => {
  return (
    <div
      className="h-full flex items-center justify-between w-full flex-col lg:flex-row bg-cover"
      style={{ backgroundImage: `url(${trainMainImg})` }}
    >
      <div className="p-8 pt-28 md:p-24 md:pt-36 lg:p-36">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#41A4FF]">
          Easily Book Your <br /> Train Tickets Online <br /> Across India
        </h2>
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-[#DEEFFF] py-4">
          Indian Railways
        </h1>
        <p className="text-sm md:text-xl lg:max-w-[580px] md:max-w-[900px] text-justify">
          Experience the vast railway network of India, connecting every corner
          of the country. From the scenic Himalayas to the beautiful beaches of
          Goa, Indian Railways offers a seamless travel experience with easy
          online booking. Enjoy comfortable journeys with sleeper, AC, and
          luxury train options.
        </p>
      </div>
    </div>
  );
};

export default TrainHero;
