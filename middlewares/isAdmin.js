import Admin from "../model/staff/Admin.js";
const isAdmin = async (req, res, next) => {
    const userId = req.userAuth._id
    const foundUser = await Admin.findById(userId)
    if (foundUser.role === "admin"){
        next()

    } else {
        const err = new Error("Access denied")
        next(err)
    }
}

export default isAdmin;