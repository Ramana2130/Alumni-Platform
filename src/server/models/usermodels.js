import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "university-details",
    },
    currentstudentsname: {
      type: String,
      required: true,
    },
    currentstudentsregisterno: {
      type: String,
      required: true,
    },
    hashedPassword: {
      type: String,
    },
    currentstudentsdepartment: {
      type: String,
      required: true,
    },
    currentstudentsyearofjoining: {
      type: Number,
      required: true,
    },
    currentstudentsyearofpassing: {
      type: Number,
      required: true,
    },
    currentstudentsmobilenumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please fill a valid email address",
      ],
    },
  },
  { timestamps: true }
);

const userModels = mongoose.model("users", userSchema);
export default userModels;
