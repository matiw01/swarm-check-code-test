import mongoose from "mongoose";


const CoachSchema = new mongoose.Schema({
  surename: {
    type: "String",
    required: [true, "Please enter surename"],
    maxLength: [100, "Surename cannot be more than 100 characters long"],
  },
  capacity: {
    type: "Number",
    required: [true, "Please enter capacity"],
  },
  students: [mongoose.Types.ObjectId],
});

export default mongoose.model("Coach", CoachSchema)