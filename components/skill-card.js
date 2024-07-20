import React from "react";
import Image from "next/image";

function SkillCard({ title, image, children }) {
  return (
    <div className="my-3">
      <h3 className="text-base font-medium">{title}</h3>
      <div className="flex items-end">
        <Image src={image} alt="card" className="w-6 mr-2" priority />
        <p>{children}</p>
      </div>
    </div>
  );
}

export default SkillCard;
