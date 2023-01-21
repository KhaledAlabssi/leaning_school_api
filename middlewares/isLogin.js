import { verifyToken } from "../utils/jwToken.js"
import Admin from "../model/staff/Admin.js"
const isLogin = async (req, res, next) => {
    // recive token, verify it, save it to user req.obj

    const {authorization} = req.headers
    const token = authorization?.split(" ")[1]
    const verify = verifyToken(token)
    if(verify) {
        // find user
        const user = await Admin.findById(verify.id).select('name email role')

        req.userAuth = user
      next()

    } else {
        const err = new Error("Token is expired/invalid!")
       next(err)
    }
}

export default isLogin;