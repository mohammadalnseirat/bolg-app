import express from "express";
const port = process.env.PORT || 3000;
const app = express();

// listen on port:
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
