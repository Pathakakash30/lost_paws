const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const Mime = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      const ext = Mime[file.mimetype];
      cb(null, uuidv4() + "." + ext);
    },
  }),

  fileFilter: (req, file, cb) => {
    const isValid = !!Mime[file.mimetype];
    let error = isValid ? null : new Error("Invalid mime type!");
    cb(error, isValid);
  },
});

module.exports = upload;
