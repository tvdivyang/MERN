const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const createUser = asyncHandler(async (req, res) => {
  const findUser = await User.findOne({ email: req.body.email });
  if (!findUser) {
    // create a new user
    const saltRounds = 10;
    const hashpassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      fristName: req.body.fristName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashpassword,
      mobile: req.body.mobile,
    });
    const newUser = await user.save();

    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

module.exports = { createUser };
