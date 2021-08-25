import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({ placeholder }) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchTerm,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    // console.log(ranges);
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          onClick={() => router.push("./")}
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        ></Image>
      </div>
      {/* right */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="pl-5 bg-transparent outline-none flex-grow placeholder-gray-400 text-sm text-gray-600"
          type="text"
          placeholder={placeholder || "start your search"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon className="bg-red-400 hidden md:inline-flex h-10 rounded-full text-white p-2 cursor-pointer md:mx-2"></SearchIcon>
      </div>
      {/* center  */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-8 cursor-pointer"></GlobeAltIcon>
        <div className="flex space-x-4 border-2 p-2 rounded-full items-center">
          <MenuIcon className="h-6"></MenuIcon>
          <UserCircleIcon className="h-6"></UserCircleIcon>
        </div>
      </div>
      {searchTerm && (
        <div className="flex flex-col col-span-3 mx-auto my-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5"></UsersIcon>
            <input
              type="number"
              value={noOfGuests}
              min="1"
              onChange={(e) => {
                setNoOfGuests(e.target.value);
              }}
              className="h-4 w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex ">
            <button
              onClick={() => setSearchTerm("")}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
