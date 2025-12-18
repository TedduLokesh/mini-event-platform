const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    console.log("REGISTER BODY:", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log("Missing fields");
      return res.status(400).json({ message: "All fields required" });
    }

    const hashed = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    console.log("User created:", user);

    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
