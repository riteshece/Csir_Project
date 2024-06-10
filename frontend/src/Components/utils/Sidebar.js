// src/components/SideNavbar.js
import React from "react";

const SideNavbar = ({ techDetails, selectedTech, handleTechClick }) => {
  return (
    <div className="bg-gray-800 text-white w-1/7 py-8">
      <div className="px-8">
        <h2 className="text-xl font-bold mb-4">Tech-Info List</h2>
        <ul>
          {techDetails.map((tech) => (
            <li
              key={tech.id}
              className={`py-2 cursor-pointer ${
                selectedTech && selectedTech.id === tech.id ? "font-bold" : ""
              }`}
              onClick={() => handleTechClick(tech)}
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
