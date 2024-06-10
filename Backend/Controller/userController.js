const { db } = require("../models/index");
const userModel = db.userModel;
const csirModel = db.csirModel;
const Signup = require("../models/userModel");
const CsirDetails = require("../models/csirModel");

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await userModel.create({ name, email, password });
    console.log("User signed up successfully");
    res.status(201).json({ message: "User signed up successfully" });
  } catch (err) {
    console.error("Error inserting user details:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ where: { email, password } });
    if (user) {
      console.log("User logged in successfully");
      res.status(200).json({ message: "Login successful" });
    } else {
      console.log("Login failed: Incorrect email or password");
      res.status(401).json({ error: "Incorrect email or password" });
    }
  } catch (err) {
    console.error("Error querying user details:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createFormData = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData, "******************************************");
    console.log(req.files,"*******************************************************")
    if (req.files && req.files.length > 0) {
      const datte = Date.now();
      const buffer = Buffer.from(req.files[0].buffer, "base64");

      const directoryPath = "/mys3bucket/";
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      const filePath = directoryPath + datte + "-" + req.files[0].originalname;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      fs.writeFileSync(filePath, buffer);
      var path =
        "http://localhost:3000/imagepath/" +
        datte +
        "-" +
        req.files[0].originalname;
    }
    const dataForm = {
      technologyRefNo: formData.technologyRefNo,
      fileNo: formData.fileNo,
      keywordTechnology: formData.keywordTechnology,
      nameKnowhow: formData.nameKnowhow,
      industrialSector: formData.industrialSector,
      multiLabInstitute: formData.multiLabInstitute,
      leadLaboratory: formData.leadLaboratory,
      // associateInstitute: form.associateInstitute,
      technologyLevel: formData.technologyLevel,
      scaleDevelopment: formData.scaleDevelopment,
      yearDevelopment: formData.yearDevelopment,
      briefKnowhow: formData.briefKnowhow,
      competitivePosition: formData.competitivePosition,
      technoPeriod: formData.technoPeriod,
      marketPotential: formData.marketPotential,
      environmentalStatutory: formData.environmentalStatutory,
      highPicture: req.files && req.files.length > 0 ? path : "",
      laboratoryDetail: formData.laboratoryDetail,
    };
    await csirModel.create(dataForm);
    console.log("Data inserted successfully");
    res.status(201).json({ message: "Data inserted successfully" });
  } catch (err) {
    console.error("Error inserting form data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signupUser, loginUser, createFormData };
