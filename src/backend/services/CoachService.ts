import mongoose from "mongoose";
import CoachModel from "../models/Coach";

export default class CoachService {
  model: mongoose.Model<any, any>;
  constructor() {
    this.model = CoachModel;
  }

  post = async (data: any) => {
    return await this.model.create(data);
  };

  get = async () => {
    const coach = await this.model.find();
    return coach;
  };

  addStudent = async (data: any) => {
    
    const studentId: mongoose.Types.ObjectId = data.studentId;
    const coachId: mongoose.Types.ObjectId = data.coachId;

    var coach = await this.model.findById(coachId);

    if (coach.students.length >= coach.capacity || coach.students.includes(studentId)){ 
        return [coach, false];
    }
    
    
    coach.students.push(studentId);

    await this.model.findByIdAndUpdate(
      coachId,
      { students: coach.students }
    );

    return [coach, true];
  };

  delete = async (data : any) => {
    
    const coachId: mongoose.Types.ObjectId = data.coachId;

    const deletedCoach = await this.model.findByIdAndDelete(coachId);

    const coaches = await this.get()

    for (let student of deletedCoach.students){
      for (let coach of coaches) {
        const [_, success] = await this.addStudent({coachId : coach._id, studentId : student})
        
        if (success){break}
    }
  }
  return [deletedCoach, true];
  }
}