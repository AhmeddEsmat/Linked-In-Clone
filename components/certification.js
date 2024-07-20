import React from "react";
import SectionContainer from "./section-container";
import Card from "./card";
import Go from "@/assets/go_my_code_logo.jpeg";
import We from "@/assets/telecom_egypt_logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Certification() {
  return (
    <SectionContainer title="Licenses & Certifications">
      <Card image={Go} title="Introduction to React.js">
        <p>GOMYCODE</p>
        <div className="text-gray-500">
          <p>Issued Oct 2022</p>
          <p>Credential ID 00012072</p>
        </div>
      </Card>
      <hr className="my-2" />
      <Card image={We} title="Cloud Computing">
        <p>Telecom Egypt</p>
        <p className="text-gray-500">Issued June 2022</p>
      </Card>
      <hr className="my-2" />
      <button className="w-full h-full text-base font-medium rounded-lg hover:bg-[#dedede] hover:bg-opacity-35">
        Show all 5 licenses & certifications
        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </button>
    </SectionContainer>
  );
}

export default Certification;
