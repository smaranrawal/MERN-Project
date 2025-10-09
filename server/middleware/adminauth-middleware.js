const jwt = require("jsonwebtoken");
const productModel = require("../models/product-model");

const adminAuth = async (req, res, next) => {
  try {
    // ✅ Correct way to access header
    const token = req.header("Authorization");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized HTTP, Token not provided" });
    }

    // ✅ Remove "Bearer " and trim
    const jwtToken = token.replace("Bearer ", "").trim();
    console.log("Token from auth middleware:", jwtToken);

    // ✅ Verify JWT
    const token_decode = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    // ✅ Check if admin
    if (token_decode.email !== process.env.ADMIN_EMAIL) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized, login again" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};

module.exports = adminAuth;
