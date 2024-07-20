import Image from "next/image";
import React from "react";
import Cover from "@/assets/default-background-image.png";
import Profile from "@/assets/profile.jpeg";
import Thndr from "@/assets/thndr-logo.png";
import Uni from "@/assets/Ain_Shams_logo.png";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ProfileButton from "./profile-button";

function ProfileCard() {
  let spanCss = "text-[#1174C9] font-medium hover:cursor-pointer";
  return (
    <div className="md:ml-12 xl:ml-60 flex flex-col xl:relative bg-white rounded-lg shadow-sm">
      <Image
        src={Cover}
        alt="Cover Photo"
        className="w-full relative xl:static rounded-t-lg"
        priority
      />
      <div className="absolute -translate-x-[95%] translate-y-[57%] left-[27%] sm:left-[22%]">
        <Image
          src={Profile}
          alt="Profile Photo"
          className="w-24 h-24 sm:w-32 sm:h-32 xl:w-40 xl:h-40 rounded-full border-white border-4"
          priority
        />
      </div>
      <div className="pl-8 mt-14 md:mt-[5.2rem] lg:mt-14 flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Ahmed Esmat</h2>
          <h3 className="text-[1.075rem]">
            Frontend Developer Intern @ Thndr⚡️
          </h3>
          <p>
            <span className="text-gray-500">Cairo, Egypt • </span>
            <span className={spanCss}>Contact info</span>
          </p>
          <p className={spanCss}>462 connections</p>
          <div className="mt-2 mb-6">
            <ProfileButton icon={faUserPlus} color="blue">
              Connect
            </ProfileButton>
            <ProfileButton color="white">Message</ProfileButton>
            <ProfileButton color="black">More</ProfileButton>
          </div>
        </div>
        <div className="hidden sm:inline text-[0.9rem] [&>*]:hover:cursor-pointer font-medium mr-16 [&>*]:py-2">
          <div className="flex items-center">
            <Image
              src={Thndr}
              alt="Thndr Logo"
              className="w-10 pr-2"
              priority
            />
            <p>Thndr</p>
          </div>
          <div className="flex">
            <Image src={Uni} alt="Uni Logo" className="w-10 pr-2" priority />
            <p>Ain Shams University</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
