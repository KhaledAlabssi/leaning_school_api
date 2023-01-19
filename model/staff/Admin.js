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
        }
    }, {
        timestamps: true
    }
)

const Admin = mongoose.model("Admin", AdmingSchema);
export default Admin;