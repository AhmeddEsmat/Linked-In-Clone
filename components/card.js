import Image from "next/image";
import React from "react";

function Card({ image, title, children }) {
  return (
    <div className="py-4 flex">
      <Image src={image} className="w-12 h-12" priority />
      <div className="ml-4">
        <h3 className="font-semibold text-base">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default Card;
