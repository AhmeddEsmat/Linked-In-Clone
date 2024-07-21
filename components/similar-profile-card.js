import React from "react";
import ProfileButton from "./profile-button";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function SimilarProfileCard({ profile, index }) {
  return (
    <>
      <div key={index} className="my-2 flex">
        <img
          src={profile.picture.large}
          alt={profile.name.first}
          className="w-16 h-16 rounded-full"
        />
        <div className="pl-3 [&>*]:py-1">
          <h3 className="font-medium">{`${profile.name.first} ${profile.name.last}`}</h3>
          <ProfileButton icon={faLock} color="white">
            Message
          </ProfileButton>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
}

export default SimilarProfileCard;
