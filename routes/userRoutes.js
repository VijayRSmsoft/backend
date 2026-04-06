const express = require("express");
const router = express.Router();
const { createUser, getUsers ,updateUser} = require("../controllers/userController");

router.post("/add", createUser);
router.get("/", getUsers);
router.put("/update/:id", updateUser);

module.exports = router;