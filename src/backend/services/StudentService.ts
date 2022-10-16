import mongoose from "mongoose";
import StudentModel from "../models/Student";


export default class StudentService {
  
    model: mongoose.Model<any, any>;
    constructor() {
        this.model = StudentModel;
    }

    post = async (data: any) => {
        return await this.model.create(data);
    };

    get = async () => {
        const student = await this.model.find();
        return student;
    }
    
}
