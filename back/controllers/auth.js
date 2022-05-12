// models
const User = require("../models/user");

// packages
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ----------------------- login --------------------------//
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // field check
  if (!(email && password)) {
    return res.json({ error: "All fields are required." });
  }

  try {
    // checking user
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.json({ error: "Invalid credentials." });
    }

    // password check
    const isCorrect = await bcrypt.compare(password, existingUser.password);
    if (isCorrect) {
      const token = jwt.sign(
        { name: existingUser.firstname, email: existingUser.email },
        "bectosil",
        {
          expiresIn: "2h",
        }
      );

      // token register
      const loggedInUser = await User.updateOne({ email }, { token });
      if (loggedInUser) {
        return res.json({ message: "Logged in successfully", token });
      }
      return res.json({ error: `Cann't loggin user.` });
    }
    // incorrect password
    return res.json({ error: "Invalid credentials." });
  } catch (error) {
    console.log("login error : ", error);
    return res.json({ error: "Something happend wrong" });
  }
};

// ----------------------- signup --------------------------//
exports.signup = async (req, res) => {
  const { firstname, lastname, email, password, confirmPass } = req.body;
  // field check
  if (!(firstname && lastname && email && password && confirmPass)) {
    return res.json({ error: "All fields are required." });
  }

  // password check
  if (password != confirmPass) {
    return res.json({ error: `Password doesn't match.` });
  }

  try {
    //user check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: `User already exists with this E-mail.` });
    }

    // hashing password
    const hashedPass = await bcrypt.hash(password, 12);

    // user creation
    const createUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPass,
    });
    if (createUser) {
      return res.json({ message: "Signup successfully." });
    }
  } catch (error) {
    return res.json({ error: "Something happend wrong." });
  }
};

// ----------------------- logout --------------------------//
exports.logout = async (req, res) => {
  try {
    const token = req.user.token;
    const loggedOut = await User.updateOne({ token }, { token: null });
    if (loggedOut) {
      return res.json({ message: "logged out successfully." });
    }
    return res.json({ message: `cann't logged out.` });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something happend wrong." });
  }
};
