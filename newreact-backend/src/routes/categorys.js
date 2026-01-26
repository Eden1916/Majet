const express = require("express");
const router = express.Router();
const authMiddleware = require("../middelware/authMiddelware");

router.get("/", authMiddleware, (req, res) => {
  res.json({
    message: "Protected products data",
    userId: req.user.id,
    products: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Phone" }
    ]
  });
});

module.exports = router;
