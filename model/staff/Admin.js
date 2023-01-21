import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
const AdmingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "admin"
        },
        academicTerms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "AcademicTerm"
            }
        ],
        academicYears: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "AcademicYear"
            }
        ],
        classLevels: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ClassLevel"
            }
        ],
        teachers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teacher"
            }
        ],
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student"
            }
        ],
    }, {
        timestamps: true
    }
)

// Hash password
AdmingSchema.pre('save', async function(next) {
    // skip if the user exist and want to update the password
    if(!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

    next()
})

// Verify password
AdmingSchema.methods.verifyPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)

}

const Admin = mongoose.model("Admin", AdmingSchema);
export default Admin;