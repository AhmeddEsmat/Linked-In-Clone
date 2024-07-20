import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarIcon({ icon, text, iconCss, children }) {
  let Css =
    "flex flex-col justify-center items-center align-middle pr-1.5 md:pr-5 lg:pr-10 " +
    iconCss;
  return (
    <div className={Css}>
      <FontAwesomeIcon icon={icon} className="h-5" />
      <div className="flex justify-around">
        <p className="hidden sm:block">{text}</p>
        {children}
      </div>
    </div>
  );
}

export default NavbarIcon;
