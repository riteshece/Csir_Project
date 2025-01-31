import React, { useState } from "react";
import axios from "axios";
import FooterBar from "./common/footer";
import Header from "./common/header";
import Section from "./common/section";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SideNavbar = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  // Dummy data for technology details
  const techDetails = [
    { id: 1, name: "Tech-Info List", href: "/home2" },
    { id: 2, name: "Tech-Info New" },
    { id: 3, name: "Change Password" },
    { id: 4, name: "Logout", href: "/" },
  ];

  const initialValues = {
    technologyRefNo: "",
    fileNo: "",
    keywordTechnology: "",
    nameKnowhow: "",
    industrialSector: "",
    multiLabInstitute: "",
    leadLaboratory: "",
    // associateInstitute: "",
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
  };

  const validationSchema = Yup.object({
    // technologyRefNo: Yup.string().required("Required"),
    // fileNo: Yup.string().required("Required"),
    // keywordTechnology: Yup.string().required("Required"),
    // nameKnowhow: Yup.string().required("Required"),
    // industrialSector: Yup.string().required("Required"),
    // leadLaboratory: Yup.string().required("Required"),
    // // associateInstitute: Yup.string().required("Required"),
    // technologyLevel: Yup.string().required("Required"),
    // scaleDevelopment: Yup.string().required("Required"),
    // yearDevelopment: Yup.string().required("Required"),
    // briefKnowhow: Yup.string().required("Required"),
    // competitivePosition: Yup.string().required("Required"),
    // technoPeriod: Yup.string().required("Required"),
    // marketPotential: Yup.string().required("Required"),
    // environmentalStatutory: Yup.string().required("Required"),
    // laboratoryDetail: Yup.string().required("Required"),
  });

  // const handleSubmit = (values) => {
  //   console.log("handle submit is calling******************", values);
  //   const url = "http://localhost:8081/createData"; // Replace with your API endpoint
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   axios
  //     .post(url, values, { headers: headers })
  //     .then((response) => {
  //       console.log("Response data:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("handle submit is calling**", values);
    const url = "http://localhost:8081/createData"; // Replace with your API endpoint

    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    console.log(formData,"**************************************fomdata");
    // Log the form data for debugging
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

    const headers = {
      "Content-Type": "multipart/form-data"
    };

    axios
      .post(url, formData, { headers: headers })
      .then((response) => {
        console.log("Response data:", response.data);
        setSubmitting(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitting(false);
      });
  };

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
            {/* <h2 className="text-xl font-bold mb-4">Tech-Info List</h2> */}
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

        {/* Form */}
        <div className="flex-1 p-8 bg-blue-200 border">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="technologyRefNo">
                    Technology /Knowhow Ref No:
                  </label>
                  <Field
                    type="text"
                    name="technologyRefNo"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="technologyRefNo"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="fileNo">
                    File No.
                  </label>
                  <Field
                    type="text"
                    name="fileNo"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="fileNo"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group">
                  <label className="font-bold" htmlFor="keywordTechnology">
                    Keyword for Technology
                  </label>
                  <Field
                    type="text"
                    name="keywordTechnology"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="keywordTechnology"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group">
                  <label className="font-bold" htmlFor="nameKnowhow">
                    Name of Technology/Knowhow: &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      * Max. 500 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="nameKnowhow"
                    as="textarea"
                    rows="3"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="nameKnowhow"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="industrialSector">
                    Industrial Sector
                  </label>
                  <Field
                    name="industrialSector"
                    as="select"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">--Please Select--</option>
                    <option value="AG&A">
                      Agriculture and Allied Industries(AG&A)
                    </option>
                    <option value="AUTOC">Auto Components(AUTOC)</option>
                    <option value="AUTO">Automobiles(AUTO)</option>
                    <option value="AVT">Aviation(AVT)</option>
                    <option value="BNK">Banking(BNK)</option>
                    <option value="BIOT">Biotechnology(BIOT)</option>
                    <option value="CEM">Cement(CEM)</option>
                    <option value="CHE">Chemicals(CHE)</option>
                    <option value="CONSD">Consumer Durables(CONSD)</option>
                    <option value="DEFM">Defence Manufacturing(DEFM)</option>
                    <option value="EDU&T">
                      Education and Training (EDU&T)
                    </option>
                    <option value="ESDM">
                      Electronics System Design & Manufacturing (ESDM)
                    </option>
                    <option value="EN&CG">
                      Engineering and Capital Goods (EN&CG)
                    </option>
                    <option value="FINS">Financial Services (FINS)</option>
                    <option value="FMCG">
                      Fast Moving Consumer Goods (FMCG)
                    </option>
                    <option value="GEMJ">Gems and Jewellery (GEMJ)</option>
                    <option value="HTC">Healthcare (HTC)</option>
                    <option value="INF">Infrastructure (INF)</option>
                    <option value="INS">Insurance (INS)</option>
                    <option value="IT&BPM">
                      IT & Business Process Management (IT&BPM)
                    </option>
                    <option value="LEA">Leather & Non-Leather (LEA)</option>
                    <option value="MNF">Manufacturing (MNF)</option>
                    <option value="ENTM">Media and Entertainment (ENTM)</option>
                    <option value="MEDD">Medical Devices (MEDD)</option>
                    <option value="M&M">Metals and Mining (M&M)</option>
                    <option value="MSME">
                      Micro, Small and Medium Enterprises (MSME)
                    </option>
                    <option value="O&G">Oil and Gas (O&G)</option>
                    <option value="PC&D">Pharmaceuticals (PC&D)</option>
                    <option value="PNM">Ports and Shipping (PNM)</option>
                    <option value="PSL">Power (PSL)</option>
                    <option value="RLT">Railways (RLT)</option>
                    <option value="RE">Real Estate (RE)</option>
                    <option value="R&B">Renewable Energy (R&B)</option>
                    <option value="RT">Roads and Highways (RT)</option>
                    <option value="SC">Science and Technology (SC)</option>
                    <option value="SRV">Services (SRV)</option>
                    <option value="SP">Space (SP)</option>
                    <option value="T&P">Telecom (T&P)</option>
                    <option value="TSM">Textiles and Garments (TSM)</option>
                    <option value="TOU">Tourism and Hospitality (TOU)</option>
                  </Field>
                  <ErrorMessage
                    name="industrialSector"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="industrialSector">
                    Lead Laboratory / Institute
                  </label>
                  <Field
                    name="industrialSector"
                    as="select"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">--Please Select--</option>
                    <option value="AMPR&I">
                      Advanced Material and Process Research Institute
                    </option>
                    <option value="CBRI">
                      Central Building Research Institute(CBRI)
                    </option>
                    <option value="CDRI">
                      Central Drug Research Institute(CDRI)
                    </option>
                    <option value="CER">
                      Central ElectroChemical Research Institute(CERI)
                    </option>
                    <option value="CEERI">
                      Central Electronics Engineering Research Institute (CEERI)
                    </option>
                    <option value="CFTRI">
                      Central Food Technological Research Institute(CFTRI)
                    </option>
                    <option value="CGCRI">
                      Central Glass and Ceramic Research Institute(CGCRI)
                    </option>
                    <option value="CIMAP">
                      Central Institute of Medicinal and Aromatic Plants(CHE)
                    </option>
                    <option value="CIMFR">
                      Central Institute of Mining and Fuel Research(CONSD)
                    </option>
                    <option value="CLRI">
                      Central Leather Research Institute(CLRI)
                    </option>
                    <option value="CMERI">
                      Central Mechanical Engineering Research Institute (CMERI)
                    </option>
                    <option value="CRRI">
                      Central Road Research Institute (CRRI)
                    </option>
                    <option value="CSMCRI">
                      Central Salt and Marine Chemicals Research Institute
                      (CSMCRI)
                    </option>
                    <option value="CSIO">
                      Central Scientific Instrument Organisation (CSIO)
                    </option>
                    <option value="CCMB">
                      Center for Cellular Molecular Biology (CCMB)
                    </option>
                    <option value="CSIR">
                      Council of Scientific and Industrial Research, Head
                      Quarter (CSIR){" "}
                    </option>
                    <option value="FPI">Fourth Paradigm Institute (FPI)</option>
                    <option value="IIIM">
                      Indian Institute of Integrative Medicine (IIIM)
                    </option>
                    <option value="IICB">
                      {" "}
                      Indian Institute of Chemical Biology (IICB){" "}
                    </option>
                    <option value="IICT">
                      {" "}
                      Indian Institute of Chemical Technology (IT&BPM){" "}
                    </option>
                    <option value="IIP">
                      {" "}
                      Indian Institute of Petroleum (IIP)
                    </option>
                    <option value="IITR">
                      Indian Institute of Toxicology Research (IITR)
                    </option>
                    <option value="IGIB">
                      Institute of Genomics and Integrative Biology (IGIB)
                    </option>
                    <option value="IHBT">
                      Institute of Himalayan Bio-resource Technology (IHBT)
                    </option>
                    <option value="IMT">
                      Institute of Microbial Technology (IMT)
                    </option>
                    <option value="IM&MT">
                      Institute of Minerals and Materials Technology (IM&MT)
                    </option>
                    <option value="NAL">
                      National Aerospace Laboratories (NAL)
                    </option>
                    <option value="NB&RT">
                      National Botanical Research Institute (NB&RT)
                    </option>
                    <option value="NCL">
                      National Chemical Laboratory(NCL)
                    </option>
                    <option value="NEE&RI">
                      National Environmental Engineering Research Institute
                      (NEE&RI)
                    </option>
                    <option value="NGRI">
                      National Geophysical Research Institute (NGRI)
                    </option>
                    <option value="NISC&PR">
                      National Institute of Science Communication and Policy
                      Research(NISC&PR)
                    </option>
                    <option value="NIIS&T">
                      National Institute for Interdisciplinary Science and
                      Technology (NIIS&T)
                    </option>
                    <option value="NIO">
                      National Institute of Oceanography (NIO)
                    </option>
                    <option value="NML">
                      National Metallurgical Laboratory (NML)
                    </option>
                    <option value="NPL">
                      National Physical Laboratory (NPL)
                    </option>
                    <option value="NEIS&T">
                      North East Institute of Science and Technology (NEIS&T)
                    </option>
                    <option value="SERC">
                      Structural Engineering Research Centre (SERC)
                    </option>
                  </Field>
                  <ErrorMessage
                    name="industrialSector"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-group flex items-center mb-4">
                  <label className="font-bold" htmlFor="multiLabInstitute">
                    Multi Laboratory / Institute involved?
                  </label>
                  <div className="ml-4 flex space-x-4">
                    <label htmlFor="multiLabYes" className="flex items-center">
                      <input
                        type="radio"
                        id="multiLabYes"
                        name="multiLabInstitute"
                        value="Yes"
                        className="mr-2"
                        onChange={() =>
                          setFieldValue("multiLabInstitute", "Yes")
                        }
                      />
                      Yes
                    </label>
                    <label htmlFor="multiLabNo" className="flex items-center">
                      <input
                        type="radio"
                        id="multiLabNo"
                        name="multiLabInstitute"
                        value="No"
                        className="mr-2"
                        onChange={() =>
                          setFieldValue("multiLabInstitute", "No")
                        }
                      />
                      No
                    </label>
                  </div>
                  <ErrorMessage
                    name="multiLabInstitute"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="technologyLevel">
                    Technology Readiness Level (TRL)
                  </label>
                  <Field
                    as="select"
                    name="technologyLevel"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  >
                    <option value="" label="Select TRL" />
                    {[...Array(9).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="technologyLevel"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="scaleDevelopment">
                    Scale of Development: &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      * Max. 500 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="briefTechnology"
                    as="textarea"
                    rows="3"
                    maxLength="1500"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="scaleDevelopment"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="yearDevelopment">
                    Year of Development
                  </label>
                  <Field
                    type="text"
                    name="yearDevelopment"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="yearDevelopment"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="briefTechnology">
                    Brief details of Technology / Knowhow: &nbsp;
                    <span className="Hint block text-sm text-red-500 inline">
                      * Max. 1000 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="briefTechnology"
                    as="textarea"
                    rows="3"
                    maxLength="1500"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="briefTechnology"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="competitivePosition">
                    Competitive Position in the domain (how is it better than
                    competing technology)/Technology Benchmarking
                    <span className="Hint block text-sm text-red-500 inline">
                      * Max. 1500 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="competitivePosition"
                    as="textarea"
                    rows="3"
                    maxLength="1500"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="competitivePosition"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="potentialHolder">
                    Potential stack holder
                  </label>
                  <Field
                    type="text"
                    name="potentialHolder"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="potentialHolder"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="technoPeriod">
                    Techno Economics(including development $ deployment
                    cost,operational cost payback period etc.)
                    <span className="Hint block text-sm text-red-500 inline">
                      * Max. 1500 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="technoPeriod"
                    as="textarea"
                    rows="3"
                    maxLength="1500"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="technoPeriod"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="marketPotential">
                    Market Potential
                  </label>
                  <Field
                    type="text"
                    name="marketPotential"
                    as="textarea"
                    rows="3"
                    maxLength="300"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="marketPotential"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="environmentalStatutory">
                    Environmental Statutory Clearances
                  </label>
                  <Field
                    type="text"
                    name="environmentalStatutory"
                    as="textarea"
                    rows="3"
                    maxLength="300"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="environmentalStatutory"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="highPicture">
                    Upload High-Resolution Picture(s)
                  </label>
                  <input
                    type="file"
                    name="highPicture"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                    onChange={(event) => {
                      setFieldValue(
                        "highPicture",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <ErrorMessage
                    name="highPicture"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="laboratoryDetail">
                    Contact Details of Laboratory
                  </label>
                  <Field
                    type="text"
                    name="laboratoryDetail"
                    as="textarea"
                    rows="3"
                    maxLength="300"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="laboratoryDetail"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4 flex justify-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md "
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default SideNavbar;
