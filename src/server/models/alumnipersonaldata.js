import mongoose from "mongoose";
const alumniPersonalschema = new mongoose.Schema({
    // Other fields
    city: {
        type: String,
        required: false, // Make it optional
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
    companyname: String,
    role: String,
    joblocation: String,
    applyurl: String,
    jobworktype: {
        type: String,
        enum: ["full time", "part time", "internship"],
    },
});

const alumnipersonaldetails = mongoose.model("AlumniPersonalDetails", alumniPersonalschema);
export default alumnipersonaldetails;
