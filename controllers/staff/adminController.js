
// @desc Register admin
// @route Post /api/v1/admins/register
// @access Private
export const registerAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been registered",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Login admin
// @route Post /api/v1/admins/login
// @access Private
export const loginAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been loggedin",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}


export const getAdminsCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "All admins",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Get single admins
// @route Get /api/v1/admins
// @access Private
export const getAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Single admin",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Update admin
// @route Put /api/v1/admins/:id
// @access Private
export const updateAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Update admin",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Delete admin
// @route Delete /api/v1/admins/:id
// @access Private
export const deleteAdmCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Delete admin",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Admin suspend teacher
// @route Put /api/v1/admins/suspending/teacher/:id
// @access Private
export const admSuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin suspending teacher",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Admin unsuspend teacher
// @route Put /api/v1/admins/unsuspending/teacher/:id
// @access Private
export const admUnsuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unSuspending teacher",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Admin withdraw teacher
// @route Put /api/v1/admins/withdraw/teacher/:id
// @access Private
export const admWithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin withdraw teacher",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Admin unwithdraw teacher
// @route Put /api/v1/admins/unwithdraw/teacher/:id
// @access Private
export const admUnwithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unWithdraw teacher",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Admin publish exam
// @route Put /api/v1/admins/publish/exam/:id
// @access Private
export const admPublishExamCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin publish exam results",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}

// @desc Admin unpublish exam
// @route Put /api/v1/admins/unpublish/exam/:id
// @access Private
export const admUnpublishExamCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unpublish exam results",
    })
  } catch (error) {
    res.json({ status: "failed", error: error.message })
  }
}