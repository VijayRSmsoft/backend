const { response } = require("express");
const uuuid =require("uuid")
const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.updateUser = async (req, res) => {
  // console.log("req", req.body)
  // console.log("res",res)

  // try {
  //   const user = await User.findById(req.params.id)
  //   console.log(user, "user")
  //   const updatedUser = await User.findByIdAndUpdate(req.params.id);
  //   res.json(updatedUser);
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
}
