const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../config/generateToken");
//---------------------------------------Register User Code Start------------------------------------------------
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; 
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter All The Fields");
  }
  if (!emailRegex.test(email)) {
    res.status(400);
    throw new Error("Please Enter a Valid Email Address");
  }
  if (!passwordRegex.test(password)) {
    res.status(400);
    throw new Error("Password must be at least 8 characters, include one uppercase letter and one number.");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});
//--------------------------------------Register User Code END----------------------------------------------
//-------------------------------Login User Code Start---------------------------------
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email OR Password");
  }
});
//----------------------------------Login User Code END-----------------------------------------


module.exports = { registerUser, authUser };
