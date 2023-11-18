const UserModel = require("../models/user");
const asyncWrapper = require("../middleware/async");
// const { creatCustomError } = require("../errors/customerror");

const register = asyncWrapper(async (req, res) => {
  res.json({ reg: "users resgister here" });
});

const login = asyncWrapper(async (req, res) => {
  res.json({ log: "users login here" });
});

const profile = asyncWrapper(async (req, res, next) => {
  res.send({ profile: "users profile here" });
});

module.exports = {
  register,
  login,
  profile,
};
