const User = require("../models/user-models");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to my app");
  } catch (error) {
    console.log("error");
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    //hash function

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      msg: "registration sucessful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
    // res.status(200).send("Welcome to register");
  } catch (error) {
    //  res.status(500).json("internal server error");
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        msg: "Login sucessful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).json("Invalid Email or password");
    }
  } catch (error) {
    //  res.status(500).json("Internal Server error");
    next(error);
  }
};

module.exports = { home, register, login };
