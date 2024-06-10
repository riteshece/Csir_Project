import React, { useState } from "react";
import FooterBar from "./common/footer";
import Header from "./common/header";
import Section from "./common/section";

const SideNavbar = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  // Dummy data for technology details
  const techDetails = [
    { id: 1, name: "Tech-Info List", href: "/home2" },
    { id: 2, name: "Tech-Info New", href: "/home"  },
    { id: 3, name: "Change Password" },
    { id: 4, name: "Logout", href: "/signup" },
  ];

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <>
      <Header />
      <Section />
      <div className="flex h-212vh mt-n4 mb-n4 ml-n4 mr-n4">
        <div className="bg-gray-800 text-white w-1/7 py-8">
          <div className="px-8">
            <ul>
              {techDetails.map((tech) => (
                <li
                  key={tech.id}
                  className={`py-2 cursor-pointer ${
                    selectedTech && selectedTech.id === tech.id
                      ? "font-bold"
                      : ""
                  }`}
                  onClick={() => handleTechClick(tech)}
                >
                  <a href={tech.href}>{tech.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default SideNavbar;
