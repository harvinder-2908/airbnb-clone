import React from "react";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";

const Main = ({ exploreData, cardsData }) => {
  console.log(exploreData, cardsData);
  return (
    // small cards

    <div className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({ location, img, distance }) => (
            <SmallCard
              key={img}
              location={location}
              distance={distance}
              img={img}
            ></SmallCard>
          ))}
        </div>
      </section>

      {/* medium cards */}

      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
        <div className="p-3 -ml-3 flex overflow-scroll space-x-3 scrollbar-hide">
          {cardsData?.map(({ img, title }) => (
            <MediumCard key={img} title={title} img={img}></MediumCard>
          ))}
        </div>
      </section>

      {/* largecard  */}
      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlist curated by Airbnb."
        buttonText="Get Inspired"
      />
    </div>
  );
};

export default Main;
