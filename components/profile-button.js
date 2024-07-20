import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileButton({ icon, color, children }) {
  let css = "mr-3 px-4 py-1.5 rounded-3xl font-medium text-base ";
  if (color === "blue") {
    css += "bg-[#1174C9] text-white hover:bg-[#004598]";
  } else if (color === "white") {
    css +=
      "bg-white text-[#1174C9] border border-[#1174C9] hover:bg-[#baddf8] hover:bg-opacity-20";
  } else if(color ==="black"){
    css +=
      "bg-white text-black border border-black hover:bg-[#dedede] hover:bg-opacity-20";
  }
  else {
    css += "bg-[#01754F] text-white hover:bg-[#004a27]";
  }
  return (
    <button className={css}>
      <FontAwesomeIcon icon={icon} className="pr-2"/>
      {children}
    </button>
  );
}

export default ProfileButton;
