import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.json({
    project: "InfoSync",
    status: "Backend is running successfully 🚀",
    author: "Imrishav2",
  });
});

// Start server
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
