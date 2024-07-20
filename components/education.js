import React from "react";
import SectionContainer from "./section-container";
import Card from "./card";
import AinShams from "@/assets/Ain_Shams_logo.png";
import EastLondon from "@/assets/university_of_east_london_logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <SectionContainer title="Education">
      <Card image={AinShams} title="Ain Shams University">
        <p>Bachelor of Engineering - BE, Computer Engineering</p>
        <p className="text-gray-500">Sep 2019 - June 2024</p>
      </Card>
      <hr className="my-2" />
      <Card image={EastLondon} title="University of East London">
        <p>
          Bachelor of Engineering - BE, Computer Engineering and Software
          Systems
        </p>
        <p className="text-gray-500">Sep 2020 - June 2024</p>
      </Card>
      <hr className="my-2" />
      <button className="w-full h-full text-base font-medium rounded-lg hover:bg-[#dedede] hover:bg-opacity-35">
        Show all 3 educations
        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </button>
    </SectionContainer>
  );
}

export default Education;
