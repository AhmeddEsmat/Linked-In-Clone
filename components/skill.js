import React from "react";
import SectionContainer from "./section-container";
import Nti from "@/assets/national_telecommunication_institute_logo.jpeg";
import Go from "@/assets/go_my_code_logo.jpeg";
import SkillCard from "./skill-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Skill() {
  return (
    <SectionContainer title="Skills">
      <SkillCard title="Ethical Hacking" image={Nti}>
        Ethical Hacking Trainee at National Telecommunication Institute - المعهد
        القومي للاتصالات
      </SkillCard>
      <hr />
      <SkillCard title="React.js" image={Go}>
        Introduction to React.js
      </SkillCard>
      <hr className="mb-2" />
      <button className="w-full h-full text-base font-medium rounded-lg hover:bg-[#dedede] hover:bg-opacity-35">
        Show all 17 skills
        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </button>
    </SectionContainer>
  );
}

export default Skill;
