const { response } = require("express");
const { v4: uuidv4 } = require("uuid")
const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    let userId = uuidv4()
    let body = {
      ...req.body,
      userId
    }
    const user = await User.create(body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  console.log("erqqq", req.params)
  const users = await User.findOne({ userId: req.params.id })
  console.log("users", users)
  try {
    const updatedUser = await User.findOneAndUpdate(
      { userId: req.params.id },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    console.log("updated user", updatedUser)
    res.json(updatedUser);
  } catch (eror) {
    res.status(500).json({ error: error.message });
  }
}

exports.deleteUser = async (req, res) => {
  console.log("req", req.params.id)
  try {
    const deletedUser = await User.findOneAndDelete({ userId: req.params.id });
    console.log("deleteduser", deletedUser)
    res.json(deletedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// exports.filterUsers = async (req, res) => {

//   const users = await User.find()
//   let ss= req.body;
//   const d = users.filter((a) => (a.name.includes(ss)))
//   console.log(d)


//   const s = users.filter((a) => (a.active))
//   console.log("data", s)

// }


