import asyncHandler from "express-async-handler";
import Admin from "../../model/staff/Admin.js";
import { generateToken, verifyToken } from "../../utils/jwToken.js";

// @desc Register admin
// @route Post /api/v1/admins/register
// @access Private
export const registerAdmCtrl = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ message: "Please insert valid data..." });
  }

  // check if email exists...
  const adminFound = await Admin.findOne({ email });
  if (!adminFound) {
    const user = await Admin.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      status: "success",
      data: user,
    });
  }
  throw new Error("Admin Exists");
});

// @desc Login admin
// @route Post /api/v1/admins/login
// @access Private
export const loginAdmCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({ email });
  if (!user) {
    return res.json({ message: "User not found..." });
  } else if (user && (await user.verifyPassword(password))) {
    // generate token
    const token = generateToken(user._id);
    const verify = verifyToken(token);
    return res
      .status(200)
      .json({ status: "success", data: generateToken(user._id), user, verify });
  } else {
    return res.status(500).json({ message: "Invalid login credentials..." });
  }
});

// @desc Get all admins
// @route Get /api/v1/admins
// @access Private
export const getAdminsCtrl = (req, res) => {
  try {
    console.log(req.userAuth);
    res.status(201).json({
      status: "success",
      data: "All admins",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};

// @desc Get single admins
// @route Get /api/v1/admins/:id
// @access Private
export const getAdminProfileCtrl = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.userAuth._id).select(
    "-password -createdAt -updatedAt"
  );
  if (!admin) {
    throw new Error("Admin not found!");
  } else {
    res.status(200).json({
      status: "success",
      data: admin,
    });
  }
});

// @desc Update admin
// @route Put /api/v1/admins/:id
// @access Private
export const updateAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Update admin",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};

// @desc Delete admin
// @route Delete /api/v1/admins/:id
// @access Private
export const deleteAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Delete admin",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};

// @desc Admin suspend teacher
// @route Put /api/v1/admins/suspending/teacher/:id
// @access Private
export const admSuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin suspending teacher",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};

// @desc Admin unsuspend teacher
// @route Put /api/v1/admins/unsuspending/teacher/:id
// @access Private
export const admUnsuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unSuspending teacher",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};

// @desc Admin withdraw teacher
// @route Put /api/v1/admins/withdraw/teacher/:id
// @access Private
export const admWithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin withdraw teacher",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};

// @desc Admin unwithdraw teacher
// @route Put /api/v1/admins/unwithdraw/teacher/:id
// @access Private
export const admUnwithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unWithdraw teacher",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};

// @desc Admin publish exam
// @route Put /api/v1/admins/publish/exam/:id
// @access Private
export const admPublishExamCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin publish exam results",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};

// @desc Admin unpublish exam
// @route Put /api/v1/admins/unpublish/exam/:id
// @access Private
export const admUnpublishExamCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unpublish exam results",
    });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
};
