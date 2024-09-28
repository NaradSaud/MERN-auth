const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    // Check if email and password are provided
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required." });
    }

    // Find the user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password." });
    }

    // Verify the password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid email or password." });
    }

    // Generate a token
    const token = user.generateAuthToken();

    // Send the token back to the client
    res.status(200).send({ data: token, message: "Logged in successfully." });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ message: "Internal Server Error." });
  }
});

module.exports = router;
