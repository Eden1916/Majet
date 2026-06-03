const user = require("../models/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  try {
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: foundUser._id, email: foundUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        name: foundUser.name,
        email: foundUser.email
      }
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error.message, error.stack);
    res.status(500).json({ message: error.message });
  }
};


const signup = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("REQ BODY:", req.body);

  if(!name || !email || !password){
    return res.status(400).json({message: "Please fill all fields!"});
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    return res.status(400).json({message: "Invalid email format!"});
  }

  if(password.length < 6){
    return res.status(400).json({message: "Password must be at least 6 charachters long!"});
  }
 
  try{
  const userExist = await user.findOne({email})

  if(userExist){
    return res.status(400).json({message: "User exists in the sysytem!"})
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new user({
    name,
    email,
    password: hashedPassword,
  })

  await newUser.save();

  const token = jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(201).json({
    message: "User registered successfully!",
    token,
    user:{
      name: newUser.name,
      email: newUser.email
    }
  })}
catch(error){
  console.error("SIGNUP ERROR:", error.message, error.stack);
  res.status(500).json({message: error.message})
}
};

module.exports = { signup, login };
