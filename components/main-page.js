import React from "react";
import ProfileCard from "./profile-card";
import Hiring from "./hiring";
import Activity from "./activity";
import Experience from "./experience";
import Education from "./education";
import Certification from "./certification";
import Skill from "./skill";
import SimilarProfile from "./similar-profile";

function MainPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mt-5">
      <section>
        <ProfileCard />
        <Activity />
        <Experience />
        <Education />
        <Certification />
        <Skill />
      </section>
      <aside>
        <Hiring />
        <SimilarProfile />
      </aside>
    </div>
  );
}

export default MainPage;
