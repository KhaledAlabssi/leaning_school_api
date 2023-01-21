import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_KEY, {expiresIn: '7d'})
}

const verifyToken = token => {
    return jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return false
        } else {
            return decoded
        }
    })

}

export {generateToken, verifyToken};