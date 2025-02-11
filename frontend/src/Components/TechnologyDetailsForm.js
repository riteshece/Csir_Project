import React from "react";
import TechnologyDetailField from "./TechnologyDetailField";

const TechnologyDetailsForm = ({
  technologyDetails,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="flex-1 p-8 bg-blue-200">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Technology Details
      </h2>
      <table className="w-full">
        <tbody>
          <TechnologyDetailField
            label="Technology /Knowhow Ref No:"
            type="text"
            name="technologyRefNo"
            value={technologyDetails.technologyRefNo}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="File No:"
            type="text"
            name="fileNo"
            value={technologyDetails.fileNo}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Keyword Technology:"
            type="text"
            name="keywordTechnology"
            value={technologyDetails.keywordTechnology}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Name of Knowhow/ Invention:"
            type="text"
            name="nameKnowhow"
            value={technologyDetails.nameKnowhow}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Industrial Sector:"
            type="text"
            name="industrialSector"
            value={technologyDetails.industrialSector}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Multilab/Institute:"
            type="text"
            name="multiLabInstitute"
            value={technologyDetails.multiLabInstitute}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Lead Laboratory/Institute:"
            type="text"
            name="leadLaboratory"
            value={technologyDetails.leadLaboratory}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Associate Institute:"
            type="text"
            name="associateInstitute"
            value={technologyDetails.associateInstitute}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Technology Readiness Level (TRL):"
            type="text"
            name="technologyLevel"
            value={technologyDetails.technologyLevel}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Scale of Development:"
            type="text"
            name="scaleDevelopment"
            value={technologyDetails.scaleDevelopment}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Year of Development:"
            type="text"
            name="yearDevelopment"
            value={technologyDetails.yearDevelopment}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Brief Knowhow/ Process Description:"
            type="textarea"
            name="briefKnowhow"
            value={technologyDetails.briefKnowhow}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Competitive Position:"
            type="textarea"
            name="competitivePosition"
            value={technologyDetails.competitivePosition}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Technology Offer Period:"
            type="text"
            name="technoPeriod"
            value={technologyDetails.technoPeriod}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Market Potential:"
            type="textarea"
            name="marketPotential"
            value={technologyDetails.marketPotential}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Environmental/ Statutory Clearances:"
            type="textarea"
            name="environmentalStatutory"
            value={technologyDetails.environmentalStatutory}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="High Resolution Picture (URL):"
            type="text"
            name="highPicture"
            value={technologyDetails.highPicture}
            handleChange={handleChange}
          />
          <TechnologyDetailField
            label="Laboratory Details:"
            type="textarea"
            name="laboratoryDetail"
            value={technologyDetails.laboratoryDetail}
            handleChange={handleChange}
          />
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TechnologyDetailsForm;
