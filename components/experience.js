import React from "react";
import SectionContainer from "./section-container";
import Card from "./card";
import Image from "next/image";
import Thndr from "@/assets/thndr-logo.png";
import Linkedin from "@/assets/LinkedIn_icon.svg.png";
import Nti from "@/assets/national_telecommunication_institute_logo.jpeg";
import We from "@/assets/telecom_egypt_logo.jpeg";
import Sprints from "@/assets/sprintsai_logo.jpeg";

function Experience() {
  return (
    <SectionContainer title="Experience">
      <Card image={Thndr} title="Frontend Developer">
        <p>Thndr · Internship</p>
        <div className="text-gray-500">
          <p>Jul 2024 - Present · 1mo</p>
          <p>Cairo, Egypt · On-site</p>
        </div>
        <div className="flex items-center">
          <Image src={Linkedin} alt="logo" className="w-4 h-4 mr-1" priority />
          <span>helped me get this job</span>
        </div>
      </Card>
      <hr my-4 />
      <Card image={Nti} title="Ethical Hacking Trainee">
        <p>National Telecommunication Institute - المعهد القومي للاتصالات</p>
        <div className="text-gray-500">
          <p>Jul 2023 - August 2023 · 2mo</p>
          <p>Cairo, Egypt</p>
        </div>
      </Card>
      <hr my-4 />
      <Card image={We} title="Cloud Computing Trainee">
        <p>Telecom Egypt</p>
        <div className="text-gray-500">
          <p>Jul 2022 - July 2022 · 1mo</p>
          <p>Cairo, Egypt · On-site</p>
        </div>
      </Card>
      <hr my-4 />
      <Card image={Sprints} title="Front End Developer Trainee">
        <p>Sprints</p>
        <div className="text-gray-500">
          <p>Aug 2021 - Oct 2021 · 3mo</p>
          <p>Cairo, Egypt</p>
        </div>
      </Card>
    </SectionContainer>
  );
}

export default Experience;
