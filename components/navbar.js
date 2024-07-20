import Image from "next/image";
import React from "react";
import Logo from "@/assets/LinkedIn_icon.svg.png";
import Profile from "@/assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faUserGroup,
  faSuitcase,
  faCommentDots,
  faBell,
  faGrip,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import NavbarIcon from "./navbar-icon";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 sm:px-10 md:px-15 xl:px-60 py-2.5 h-10 md:h-10 xl:h-14 flex justify-between bg-white">
      <div className="flex justify-center items-center">
        <Image src={Logo} alt="Linkedin Logo" className="w-8 h-8" />
        <div className="relative ml-1.5">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#EDF3F8] hidden md:block w-40 lg:w-48 xl:w-64 pl-10 pr-3 py-2 rounded-md"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700"
          />
        </div>
      </div>
      <div className="flex justify-center items-center text-xs text-[#666666]">
        <NavbarIcon icon={faHouse} text="Home" />
        <NavbarIcon icon={faUserGroup} text="My Network" />
        <NavbarIcon icon={faSuitcase} text="Jobs" />
        <NavbarIcon icon={faCommentDots} text="Messaging" />
        <NavbarIcon icon={faBell} text="Notifications" />
        <div className="hidden sm:flex flex-col justify-center items-center align-middle pr-1.5 md:pr-5 lg:pr-10">
          <Image src={Profile} className="w-6 rounded-full" />
          <div className="flex flex-row">
            <p>Me</p>
            <FontAwesomeIcon icon={faCaretDown} className="h-4 pl-1" />
          </div>
        </div>
        <NavbarIcon icon={faGrip} text="For Work" iconCss="hidden sm:inline">
          <FontAwesomeIcon icon={faCaretDown} className="h-4 pl-1" />
        </NavbarIcon>
      </div>
    </header>
  );
}

export default Navbar;
