import React from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black py-16 px-10 grid md:grid-cols-2 gap-8 text-gray-300 bottom-0">
      <div>
        <h3 className="text-2xl font-bold text-[#41A4FF]">Travely</h3>
        <p className="py-4">
          Explore the world with Travely, your trusted travel partner. We
          provide the best deals on hotels, tour packages, vehicle rentals, and
          more to make your journey unforgettable.
        </p>
        <div className="flex justify-start gap-10 md:w-[75%] my-6">
          <FaWhatsappSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="flex md:justify-around justify-start mt-8">
        <div>
          <h6 className="font-bold text-[#41a3ff]">Reservations</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">Hotels</li>
            <li className="py-2 text-sm">Tour Packages</li>
            <li className="py-2 text-sm">Vehicle Rentals</li>
            <li className="py-2 text-sm">Restaurants</li>
            <li className="py-2 text-sm">Events</li>
          </ul>
        </div>
        <div className="ml-[8rem]">
          <h6 className="font-bold text-[#41A4FF]">Support</h6>
          <ul className="mt-2 font-light">
            <li className="py-2 text-sm">Contact Us</li>
            <li className="py-2 text-sm">About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;