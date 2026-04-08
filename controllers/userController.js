const { v4: uuidv4 } = require("uuid")
const User = require("../models/user");

exports.createUser = async (req, res) => { //need to check already the user is there are not valid mail check active while crete true we 
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
exports.getUserById = async (req, res) => {
  try {
    const users = await User.findOne({ userId: req.params.id })
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
exports.getUsers = async (req, res) => {
  try {
    let { page , size } = req.query;
    page = parseInt(page);
    if(page === 0){page++}
    size = parseInt(size);
    const skip = (page - 1) * size;
    const users = await User.find().skip(skip).limit(size);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  // const users = await User.findOne({ userId: req.params.id })
  try {
    const updatedUser = await User.findOneAndUpdate(
      { userId: req.params.id },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.json(updatedUser);
  } catch (eror) {
    res.status(500).json({ error: error.message });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ userId: req.params.id });
    res.json(deletedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
// exports.filterUsers = async (req, res) => {
//   const users = await User.find()
//   let { input, active } = req.query;
//   if (input) {
//     const inputFilter = users.filter((a) => a.name.includes(input))
//     if (active == true) {
//       const inputActiveFilter = inputFilter.filter((a) => a.active)
//       return res.json(inputActiveFilter)
//     } else {
//       return res.json(inputFilter)
//     }
//   } else if (active == true) {
//     const activeFilter = users.filter((a) => a.active);
//     return res.json(activeFilter);
//   }
//   res.json(users);
// }
exports.filterUsers = async (req, res) => {
  try {
    let { input, active, role } = req.query;
    const query = {};
    if (input) {
      query.name = { $regex: input, $options: "i" }; // case-insensitive
    }
    if (active !== undefined) {
      // query.active = active === "true";  convert string to boolean
      query.active =  active === "true";
    }
    if (role) {
      query.role = role.replace(/"/g, "").toUpperCase();  
    }
    const users = await User.find(query);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


