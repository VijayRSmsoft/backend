const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "MANAGER"],
    default: "user",
  },
  description: {
    type: String,
    maxlength: 500,
  },
  active: {
    type: Boolean,
    default: true
  },
  userId: {
    type: String
  }
}, 
{
  timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);