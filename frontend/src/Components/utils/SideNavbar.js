import React, { useState } from "react";
import axios from "axios";
import FooterBar from "../common/footer";
import Header from "../common/header";
import Sidebar from "./Sidebar";
import TechnologyDetailsForm from "../TechnologyDetailsForm";

const SideNavbar = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const techDetails = [
    { id: 1, name: "Tech Info New" },
    { id: 2, name: "Change Password" },
    { id: 3, name: "Logout" },
  ];

  const [technologyDetails, setTechnologyDetails] = useState({
    technologyRefNo: "",
    fileNo: "",
    keywordTechnology: "",
    nameKnowhow: "",
    industrialSector: "",
    multiLabInstitute: "",
    leadLaboratory: "",
    associateInstitute: "",
    technologyLevel: "",
    scaleDevelopment: "",
    yearDevelopment: "",
    briefKnowhow: "",
    competitivePosition: "",
    technoPeriod: "",
    marketPotential: "",
    environmentalStatutory: "",
    highPicture: "",
    laboratoryDetail: "",
  });

  const handleChange = (event) => {
    setTechnologyDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    const url = "http://localhost:8081/createData";
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(url, technologyDetails, { headers: headers })
      .then((response) => {
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <>
      <Header />
      <div className="flex h-212vh mt-n4 mb-n4 ml-n4 mr-n4">
        <Sidebar
          techDetails={techDetails}
          selectedTech={selectedTech}
          handleTechClick={handleTechClick}
        />
        <TechnologyDetailsForm
          technologyDetails={technologyDetails}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <FooterBar />
    </>
  );
};

export default SideNavbar;
