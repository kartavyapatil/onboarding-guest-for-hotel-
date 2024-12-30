import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,"name is required"],
      trim:true
    },
    email: {
      type: String,
      required: [true,"email is required"],
      unique: true,
      trim: true,
      lowercase:true
    },
    password: {
      type: String,
      required: [true,"password is required"]
    },
    role: { type: String, enum: ['MainAdmin', 'GuestAdmin'], required: true },
  },
  { timestamps: true }
);
const model =mongoose.model('user',schema);
export default model;