const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.protect = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "No token, authorization denied!" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), config.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token!" });
  }
};
