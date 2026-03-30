import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number },
  phoneNumber: { type: Number },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
  },
  isActive: { type: Boolean, default: true },
  registrationDate: { type: Date, default: Date.now },
});

const Users = mongoose.model("users", userSchema);

export default Users;
