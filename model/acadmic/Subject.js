import mongoose from "mongoose";
const { Schema } = mongoose;

const SubjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        teachers: [{
            type: Schema.Types.ObjectId,
            ref: "Teacher",
            default: []
        }],
        acadimicTerm: {
            type: Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required: true
        }, 
        createBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        },
        duration: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
)

const Subject = mongoose.model("Subject", SubjectSchema);

export default Subject;