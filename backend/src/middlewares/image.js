
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory as a buffer
const upload = multer({ storage });

module.exports = upload;