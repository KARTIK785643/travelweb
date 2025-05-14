import React from "react";

const Hero3 = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-[#41A4FF] mb-2 block text-lg font-semibold">
                  Travel with us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  EXPERIENCE THE MAGIC OF INDIA
                </h2>
                <p className="text-body-color mb-8 text-base">
                  Discover India's rich history, vibrant traditions, and stunning landscapes. 
                  From the Taj Mahal to the beaches of Goa, every corner of India offers a 
                  unique experience that will leave you mesmerized.
                </p>
                <p className="text-body-color mb-12 text-base">
                  Whether it's exploring the majestic palaces of Rajasthan or savoring the 
                  flavors of Indian cuisine, your journey through India will be one to remember. 
                  Let us take you on an adventure like no other!
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Taj Mahal"
                      className="w-full rounded-2xl"
                    />
                  </div>
                  
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Kerala Backwaters"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;