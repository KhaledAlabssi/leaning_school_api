import mongoose from 'mongoose';
mongoose.set('strictQuery', true)
import dotenv from 'dotenv'
dotenv.config();
const dbConnect = async () => {
    try {
        await mongoose.connect(
          process.env.MONGO_URL
        )
        console.log("DB Connected Successfully!");
    } catch (error) {
        console.log("DB Connection failed!", error.message);
        
    }
}

dbConnect()
