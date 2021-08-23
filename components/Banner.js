import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      ></Image>
      <div className="absolute top-1/2 w-full font-semibold text-center">
        <p className="text-sm sm:text-lg">Not sure where to go ? Perfect</p>
        <button className="text-purple-500 font-bold bg-white px-10 py-4 rounded-full shadow-md my-3 hover:shadow-xl transition transform active:scale-90 duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
