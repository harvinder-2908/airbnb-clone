import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-5 md:px-10">
      {/* left */}

      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
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
          placeholder="start your search"
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
    </header>
  );
};

export default Header;
