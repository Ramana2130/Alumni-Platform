import mongoose from "mongoose";

const universitySchema = new mongoose.Schema(
    {
        universityid : {
            type: String,
            unique: true,
            required: true
        },
        universitypassword: {
            type: String,
            required : true
        },
        alumniId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'alumnidetails'
        }
    },{timestamps: true}
)
const universitymodels = mongoose.model("university-details", universitySchema)
export default universitymodels;