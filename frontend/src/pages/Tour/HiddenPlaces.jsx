import React from "react";

const HiddenPlaces = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-10">
      <p className="uppercase text-5xl">
        get a brief about Hidden beauties in India
      </p>

      {/* First */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
          alt=""
        />
        <div className="text-xl">
          <p className="font-extrabold text-2xl mb-3">Loktak Lake, Manipur</p>
          <p>
            Loktak Lake, the largest freshwater lake in northeastern India, is
            located in the state of Manipur. Known for its unique floating
            islands called "phumdis", it is often referred to as the "Floating
            Lake". These phumdis are masses of vegetation, soil, and organic
            matter, and they support human settlements and wildlife. The lake is
            home to the Keibul Lamjao National Park — the only floating national
            park in the world — which shelters the endangered Sangai deer. This
            hidden gem offers a serene experience with houseboats, scenic
            sunrises, and rich biodiversity.
          </p>
        </div>
      </div>

      {/* Second */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
        <div className="md:order-last">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/IMG_9666.JPG?alt=media&token=8be80c0f-0646-4f38-b468-43eb95c3b54b"
            alt=""
          />
        </div>
        <div className="text-xl">
          <p className="font-extrabold text-2xl mb-3">Gurez Valley, Kashmir</p>
          <p>
            Gurez Valley is a mesmerizing and secluded valley in the northern
            part of Kashmir, close to the Line of Control. Surrounded by snow-capped
            peaks, alpine meadows, and the roaring Kishanganga River, it remains
            untouched by heavy tourism, preserving its raw beauty and charm. The
            valley is inhabited by the Dard people, who speak the Shina language
            and have a unique culture. Gurez offers breathtaking landscapes,
            wooden houses, and pristine natural trails, making it one of India’s
            best-kept secrets and a must-visit for nature lovers and adventure
            seekers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPlaces;
