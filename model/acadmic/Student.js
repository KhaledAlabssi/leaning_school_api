import mongoose from "mongoose"
const { Schema } = mongoose

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
      default: function () {
        return (
          "STU" +
          Math.floor(Math.random() * 900 + 100) +
          Date.now().toString().slice(2, 4) +
          this.name
            .split(" ")
            .map((i) => i[0])
            .join("")
            .toUpperCase()
        )
      },
    },
    role: {
      type: String,
      default: "student",
    },
    classLevels: [
      {
        type: Schema.Types.ObjectId,
        ref: "ClassLevel",
        required: true,
      },
    ],
    currentClassLevel: {
      type: String,
      default: function () {
        return this.classLevels[this.classLevels.length - 1]
      },
    },
    academicYear: {
      type: Schema.Types.ObjectId,
      ref: "AcademicYear",
      required: true,
    },
    dateAdmitted: {
      type: Date,
      default: Date.now,
    },
    examResults: [
      {
        type: Schema.Types.ObjectId,
        ref: "ExamResult",
      },
    ],
    program: {
      type: Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    isPromotedToLevel200: {
      type: Boolean,
      default: false,
    },
    isPromotedToLevel300: {
      type: Boolean,
      default: false,
    },
    isPromotedToLevel400: {
      type: Boolean,
      default: false,
    },
    isGraduated: {
      type: Boolean,
      default: false,
    },
    isWithdrawn: {
      type: Boolean,
      default: false,
    },
    isSuspended: {
      type: Boolean,
      default: false,
    },
    perfectName: {
      type: String,
    },
    yearGraduated: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Student = mongoose.model("Student", studentSchema)
export default Student
