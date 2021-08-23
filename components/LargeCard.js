import React from "react";
import Image from "next/image";
const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 h-96 cursor-pointer min-w-300px">
      <Image
        layout="fill"
        objectFit="cover"
        className="rounded-2xl "
        src={img}
      ></Image>
      <div className="absolute top-32 left-16">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="p-4 py-2 rounded-lg mt-5 text-white bg-gray-900">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
