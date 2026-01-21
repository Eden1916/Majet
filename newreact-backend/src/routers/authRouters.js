const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { signup, login } = require("../controllers/authControllers");
const protect = require("../middelware/authMiddelware");

router.post("/signup", signup);
router.post("/login", login);


router.get("/test", (req, res) => {
    res.send("AUTH ROUTES WORK");
  });
  
  router.get("/me", protect, async(req, res) => {
    try{
      const user = await User.findById(req.user.id).select("-password");

      if(!user){
        return res.status(404).json({message: "User not found"});
      }
      res.json(user);
    } catch(error){
      console(error);
      res.status(500).json({message: "Server error"});
    }
    
  });
module.exports = router;
