const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  // 1️⃣ Get authorization header
  const authHeader = req.headers.authorization;

  // 2️⃣ Check if token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // 3️⃣ Extract token
    const token = authHeader.split(" ")[1];

    // 4️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5️⃣ Attach user info to request
    req.user = decoded;

    // 6️⃣ Allow request to continue
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
};

module.exports = protect;
