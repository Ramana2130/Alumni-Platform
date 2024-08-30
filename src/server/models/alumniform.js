import mongoose from "mongoose";

const alumniformschema = new mongoose.Schema(
  {
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'university-details',
    },
    alumniname: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    passedoutyear: {
      type: Number,
      required: true,
    },
    alumniemail: {
      type: String,
      required: true,
    },
    yearofjoining: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const alumniformsmodels = mongoose.model("alumnidetails", alumniformschema);
export default alumniformsmodels;
