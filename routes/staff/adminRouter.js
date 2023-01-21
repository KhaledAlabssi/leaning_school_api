import express from "express"
import isLogin from "../../middlewares/isLogin.js"
import {
  
  admPublishExamCtrl,
  admSuspendTeacherCtrl,
  admUnpublishExamCtrl,
  admUnsuspendTeacherCtrl,
  admUnwithdrawTeacherCtrl,
  admWithdrawTeacherCtrl,
  deleteAdmCtrl,
  getAdminCtrl,
  getAdminsCtrl,
  loginAdmCtrl,
  registerAdmCtrl,
  updateAdmCtrl,
} from "../../controllers/staff/adminController.js"
const adminRouter = express.Router()

//admin register
adminRouter.post("/register", registerAdmCtrl)

//admin login
adminRouter.post("/login", loginAdmCtrl)

// get all admins
adminRouter.get("/", isLogin,  getAdminsCtrl)

// get single admins
adminRouter.get("/:id", getAdminCtrl)

// update admins
adminRouter.put("/:id", updateAdmCtrl)

//delete admins
adminRouter.delete("/:id", deleteAdmCtrl)

// admin suspending teacher
adminRouter.put("/suspending/teacher/:id", admSuspendTeacherCtrl)

// admin unSuspending teacher
adminRouter.put("/unsuspending/teacher/:id", admUnsuspendTeacherCtrl)

// admin withdraw teacher
adminRouter.put("/withdraw/teacher/:id", admWithdrawTeacherCtrl)

// admin unwithdraw teacher
adminRouter.put("/unwithdraw/teacher/:id", admUnwithdrawTeacherCtrl)

// admin publishing exam results
adminRouter.put("/publish/exam/:id", admPublishExamCtrl)

// admin unpublishing exam results
adminRouter.put("/unpublish/exam/:id", admUnpublishExamCtrl)

export default adminRouter
