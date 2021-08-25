import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const d1 = format(new Date(startDate), "dd MMMM yy");
  const d2 = format(new Date(endDate), "dd MMMM yy");
  const dateRange = `
   ${d1} -
   ${d2}
  `;

  return (
    <div>
      <Header
        placeholder={`${location} | ${dateRange} | ${noOfGuests}`}
      ></Header>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs ">
            300+ stays - {dateRange} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden lg:inline-flex space-x-4 mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer></Footer>)
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
