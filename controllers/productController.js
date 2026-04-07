// const product =require("../models/product");
// const { v4: uuidv4 } = require("uuid")

// exports.createProduct = async (req, res) => { //need to check already the user is there are not valid mail check active while crete true we 
//   try {
//     let userId = uuidv4()
//     let body = {
//       ...req.body,
//       userId
//     }
//     const user = await User.create(body);
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };