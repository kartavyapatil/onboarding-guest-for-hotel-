import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
    hotelname: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      filename: String,
      contentType: String,
      data: Buffer,
    },
    website: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("hotel", formSchema);
export default model;
