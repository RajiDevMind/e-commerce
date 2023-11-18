require("dotenv").config();
const UserModel = require("../models/user");
const asyncWrapper = require("../middleware/async");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Error } = require("mongoose");
// const { creatCustomError } = require("../errors/customerror");

const register = asyncWrapper(async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const userDetails = { name, email, password: hashedPassword };

  const userDoc = await UserModel.create({ ...userDetails });
  const token = jwt.sign(
    { userId: userDoc._id, name: userDoc.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
  res.status(201).json({ userDoc: { user: userDoc.name } }, token);
});

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Kindly provide valid email and password?");
  }

  const userDoc = await UserModel.findOne({ email });
  if (!userDoc) {
    throw new Error("Invalid details!");
  }

  // compare password to registered password
  if (userDoc) {
    const isPasswordCorrect = bcrypt.compareSync(password, userDoc.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
    } else {
      const token = jwt.sign(
        { userId: userDoc._id, name: userDoc.name },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_LIFETIME,
        }
      );
      res.status(200).json({ userDoc: { name: userDoc.name }, token });
    }
  }
});

const profile = asyncWrapper(async (req, res, next) => {
  res.send({ profile: "users profile here" });
});

module.exports = {
  register,
  login,
  profile,
};
