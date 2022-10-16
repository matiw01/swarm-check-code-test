import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  surename: {
    type: "String",
    required: [true, "Please enter surename"],
    maxLength: [100, "Surename cannot be more than 100 characters long"],
  }
});

export default mongoose.model("Student", StudentSchema);
