import express from "express"

import morgan from "morgan"
import adminRouter from "../routes/staff/adminRouter.js";
import {globalErrorHanlder, notFoundErrorHandler} from "../middlewares/globalErrorHandler.js";

const app = express()

//==== Middleware
app.use(morgan("dev"))
app.use(express.json())

//==== Routes

// adminRouter...
app.use("/api/v1/admins", adminRouter)


// Error middlewares
app.use(notFoundErrorHandler)
app.use(globalErrorHanlder)





export default app
