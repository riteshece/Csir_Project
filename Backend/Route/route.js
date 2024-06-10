const express = require("express");
const router = express.Router();
// const db = require("../Config/db");
const controller = require("../Controller/userController");
const multer = require("multer");
//multer code:********************************************************************************************************
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "dist/public/pesit");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage /* limits: {
          fileSize: 10737418240// max file size 1MB = 100000 bytes
      }, */,
  storage: multer.memoryStorage(),
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)) {
      return cb(new Error("only upload files with  jpg,jpeg,png,gif."));
    }
    cb(undefined, true); // continue with upload
  },
});
//*end*****************************multer************ */
// Define '/signup' route
router.post("/signup", controller.signupUser);
router.post("/login", controller.loginUser);
router.post(
  "/createData",
  upload.array("files", 12),
  controller.createFormData
);

module.exports = router;
