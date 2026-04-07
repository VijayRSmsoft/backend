const express = require("express");
const router = express.Router();
const { createUser, getUsers ,updateUser, deleteUser, filterUsers,getUserById} = require("../controllers/userController");

router.post("/add", createUser);
router.get("/", getUsers);
router.get("/getUserById/:id", getUserById)
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser)
router.get("/filterUsers",filterUsers)


module.exports = router;
