import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  profilePic: { type: String, default: "" }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
