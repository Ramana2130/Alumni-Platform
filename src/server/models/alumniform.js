import mongoose from "mongoose";

const alumniformschema = new mongoose.Schema(
  {
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'university-details',
    },
    alumniId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AlumniPersonalDetails' // Name of the model storing personal details
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
    alumniregisterno: {
      type: String,
      required: true,
    },
    alumnimobilenumber: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true,
      default: function () { return this.alumniregisterno; }
    },
  },
  { timestamps: true }
);

const alumniformsmodels = mongoose.model("alumnidetails", alumniformschema);
export default alumniformsmodels;
