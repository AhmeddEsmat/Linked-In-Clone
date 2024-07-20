import React from "react";

function SectionContainer({ title, children }) {
  return (
    <div className="my-2 md:ml-12 xl:ml-60 px-8 py-6 flex flex-col bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-medium">{title}</h2>
      {children}
    </div>
  );
}

export default SectionContainer;
