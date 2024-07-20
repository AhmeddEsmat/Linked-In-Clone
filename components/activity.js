import React from "react";
import SectionContainer from "./section-container";
import ProfileButton from "./profile-button";
import GIF from "@/assets/Money-moves-Yellow.gif";
import Grad from "@/assets/profile.jpeg";
import ActivityPost from "./activity-post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Activity() {
  return (
    <SectionContainer title="Activity">
      <p className="text-gray-500">470 followers</p>
      <div className="mt-2 mb-6">
        <ProfileButton color="green">Posts</ProfileButton>
        <ProfileButton color="black">Comments</ProfileButton>
        <ProfileButton color="black">Images</ProfileButton>
      </div>
      <div>
        <ActivityPost image={GIF} period="3d" count="15" comment="5">
          I am excited to share that I am starting a new internship as a
          Frontend Developer at <span className="text-[#1174C9]">Thndr</span>!
        </ActivityPost>
        <hr className="my-4" />
        <ActivityPost image={Grad} period="1w" count="32" comment="26">
          🎓I am thrilled to announce my graduation with a Bachelor’s degree
          from the{" "}
          <span className="text-[#1174C9]">
            Faculty of Engineering, Ain Shams University
          </span>{" "}
          and <span className="text-[#1174C9]"> University of East London</span>
          .
        </ActivityPost>
      </div>
      <hr className="my-4" />
      <button className="w-full h-full text-base font-medium rounded-lg hover:bg-[#dedede] hover:bg-opacity-35">
        Show All Posts
        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </button>
    </SectionContainer>
  );
}

export default Activity;
