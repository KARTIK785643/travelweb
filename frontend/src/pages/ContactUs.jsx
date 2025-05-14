import React from "react";

const ContactUs = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

            <p className="text-gray-500 mb-12">
              Didn't find your answer in the FAQ? Contact our support team for assistance.
            </p>

            <form>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:border-blue-600 focus:outline-none"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out focus:border-blue-600 focus:outline-none"
                  id="message"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="font-bold mb-4">How can I book train tickets in India?</p>
            <p className="text-gray-500 mb-12">
              You can book train tickets through online portals like IRCTC, travel agencies, or directly at railway stations.
            </p>

            <p className="font-bold mb-4">What are the best travel destinations in India?</p>
            <p className="text-gray-500 mb-12">
              India offers diverse destinations like the Taj Mahal, Kerala backwaters, Rajasthan forts, Himalayan treks, and Goan beaches.
            </p>

            <p className="font-bold mb-4">Is online payment secure for bookings?</p>
            <p className="text-gray-500 mb-12">
              Yes, online payments through verified platforms are secure. Always check for official websites and secure payment gateways.
            </p>

            <p className="font-bold mb-4">Do I need a visa to visit India?</p>
            <p className="text-gray-500 mb-12">
              International visitors require a visa, which can be applied for online or through Indian embassies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
