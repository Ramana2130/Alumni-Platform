import mongoose from "mongoose";
const alumniPersonalschema = new mongoose.Schema({
    // Other fields
    alumniId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'alumnidetails', // Assuming you have an 'Alumni' model
        required: true
    },
    about: {
        type: String,
        required: false,
    },
    nationality: {
        type: String,
        required: false, // Make it optional
    },
    currentstatus: {
        type: String,
        required: false, // Make it optional
    },
    currentcity: {
        type: String,
        required: false, // Make it optional
    },
    // Job details fields
    companyname: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    successstories: {
        type: String,
        required: true
    },
    fromlearn: {
        type: String,
        required: true
    },
});

const alumnipersonaldetails = mongoose.model("AlumniPersonalDetails", alumniPersonalschema);
export default alumnipersonaldetails;
