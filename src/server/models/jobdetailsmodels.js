import mongoose from "mongoose";

const jobDetailsSchema = new mongoose.Schema({
    alumniId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alumni',
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    joblocation: {
        type: String,
        required: true,
    },
    applyurl: {
        type: String,
        required: true,
    },
    jobworktype: {
        type: String,
        enum: ["full time", "part time", "internship"],
        required: true,
    },
});

const jobDetailsmodels = mongoose.model("JobDetails", jobDetailsSchema);
export default jobDetailsmodels;
