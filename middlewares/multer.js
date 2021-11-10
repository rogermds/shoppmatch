const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./public/images/user-image");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + " - " + file.originalname);
	},
});

const upload = multer({ storage: storage });
// const uploadAvatar = multer("avatar");


module.exports = upload 
// uploadAvatar
