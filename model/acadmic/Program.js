import mongoose, { mongo } from "mongoose"

const { Schema } = mongoose

const ProgramSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  duration: {
    type: String,
  },
  code: {
    type: String,
    default: function () {
      return (
        this.name
          .split(" ")
          .map((i) => i[0])
          .join("")
          .toUpperCase() + Math.floor(Math.random() * 90 + 10)
      )
    },
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: true
  }, 
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
      default: []
    }
  ],
  students: [{
    type: Schema.Types.ObjectId,
    ref: "Student",
    default: []
  }

  ],
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject",
      default: []
    }
  ]
}, {
  timestamps: true
})

const Program = mongoose.model("Program", ProgramSchema);

export default Program;
