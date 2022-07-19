const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + file.originalname.replace(/\s/g, "")
    );
  },
});

const upload = multer({ storage: storage });

const avatarUpload = upload.single("avatar");

const postUpload = upload.fields([
  { name: "main", maxCount: 1 },
  { name: "gallery", maxCount: 10 },
]);

module.exports = { avatarUpload, postUpload };
