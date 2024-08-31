import mongoose from "mongoose";

const alumniPersonalschema = new mongoose.Schema(
    {
        alumniId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'alumnidetails',
        },
        about: {
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        nationality: {
            type: String,
            required: true
        },
        currentstatus: {
            type: String,
            required: true,
            default: ['working']
        },
        role: {
            type: String,
            required: true
        },
        companyname: {
            type: String,
            required: true
        },
        currentcity: {
            type: String,
            required: true
        },
        successstories: {
            type: String,
        },
        fromlearn: {
            type: String
        }
    }, { timestamps: true }
);

const alumnipersonaldetails = mongoose.model("alumni-personal-details", alumniPersonalschema);
export default alumnipersonaldetails;
