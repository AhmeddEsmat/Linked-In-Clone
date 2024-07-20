"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SimilarProfileCard from "./similar-profile-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SimilarProfile() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=30&inc=name,location,picture"
        );
        setProfiles(response.data.results);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    }

    fetchProfiles();
  }, []);

  return (
    <div className="bg-white w-full md:w-[300px] mt-2 mb-10 p-5 rounded-lg shadow-sm">
      <h2 className="text-base font-semibold mb-4">Other similar profiles</h2>
      {profiles.map((profile, index) => (
        <SimilarProfileCard profile={profile} key={index} />
      ))}
      <button className="w-full h-full text-base font-medium rounded-lg hover:bg-[#dedede] hover:bg-opacity-35">
        Show all people
        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </button>
    </div>
  );
}

export default SimilarProfile;
