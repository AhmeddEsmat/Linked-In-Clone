import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarIcon({ icon, text, iconCss, children }) {
  let Css =
    "flex flex-col justify-center items-center align-middle mr-1.5 md:mr-3 lg:mr-5 w-fit " +
    iconCss;
  return (
    <div className={Css}>
      <FontAwesomeIcon icon={icon} className="h-5" />
      <div className="flex justify-around">
        <p className="hidden sm:block whitespace-nowrap">{text}</p>
        {children}
      </div>
    </div>
  );
}

export default NavbarIcon;
