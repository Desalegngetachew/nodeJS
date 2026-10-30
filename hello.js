
import express from "express";
import multer from "multer";
import path from "path";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { error } from "console";
import route from "./routes/userRoute.js";

import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const mongoosURL = process.env.MONGO_URL;

mongoose.connect(mongoosURL).then(() => {
  console.log("Database is connected successfully.");

}).catch((error) => {
  console.log(error);
})

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send(`
    <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="image" accept="image/*" required />
    <button type="submit">Upload image</button>
    </form>
    `);
});

app.post("/upload", upload.single("image"), (req, res) => {
  const imageUrl = `/uploads/${req.file.filename}`;

  res.send(`
      <h2>Uploaded Image</h2>
      <img src="${imageUrl}" style="max-width:500px;" />
      <br><br>
      <a href="/">Upload another image</a>
      `);
});

app.listen(3000, () => {
  console.log("Open http://localhost:3000");
});

app.use("/api/user", route);