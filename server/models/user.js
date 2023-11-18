const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Kindly provide a name?"],
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Kindly provide a email?"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email ",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Kindly provide a password?"],
    minlength: 5,
  },
});

const Usermodel = mongoose.model("User", UserSchema);

module.exports = Usermodel;
