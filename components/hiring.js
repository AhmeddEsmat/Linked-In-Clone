import React from "react";
import hiring from "@/assets/hiring.png";
import Image from "next/image";

function Hiring() {
  return <Image src={hiring} alt="Hiring" className="w-full md:w-[300px] rounded-lg" />;
}

export default Hiring;
