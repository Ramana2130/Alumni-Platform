import mongoose from "mongoose";

const universitySchema = new mongoose.Schema(
    {
        universityname: {
            type: String,
            required: true,
            unique: true,

        },
        universitylocation: {
            type: String,
            required: true
        },
        universityid: {
            type: String,
            required: true
        },
        universitypassword: {
            type: String,
            required: true
        },
        alumniId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'alumnidetails'
        }
    }, { timestamps: true }
)
const universitymodels = mongoose.model("university-details", universitySchema)
export default universitymodels;