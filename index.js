import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const port = process.env.PORT ?? 8000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  //   res.status(200).json({ message: "Server Is Up And Running" });
});

app.post("/about", async (req, res) => {
  const { username, fullname, email, password } = req.body;
  console.log("Form Data:", { username, fullname, email, password });

  res.status(200).json({
    status: "success",
    message: "Form submitted successfully!",
    data: {
      username,
      fullname,
      email,
      password,
    },
  });
});

app.listen(port, () => {
  console.log(`App Is Listening To PORT - ${port}`);
});
