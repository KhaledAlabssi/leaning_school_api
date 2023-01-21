import express from "express"

import morgan from "morgan"
import adminRouter from "../routes/staff/adminRouter.js";

const app = express()

//==== Middleware
app.use(morgan("dev"))

//==== Routes

// adminRouter...
app.use("/api/v1/admins", adminRouter)





export default app
