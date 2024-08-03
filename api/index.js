import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
const port = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(express.json())
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
app.use('/api/user',userRoutes)
