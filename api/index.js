import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
const port = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(express.json());
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// listen on port:
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Define routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// add middleware :
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
