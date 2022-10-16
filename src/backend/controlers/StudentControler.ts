import { Request, Response } from "express";
import StudentService from "../services/studentService";

export default class StudnetController {
  service: StudentService;
  constructor(service: StudentService) {
    this.service = service;
  }

  post = async (req: Request, res: Response) => {
    const student = await this.service.post(req.body);

    res.status(200).json({
      succes: true,
      value: student,
    });
  };

  get = async (req: Request, res: Response) => {
    const student = await this.service.get();
    
    res.status(200).json({
      succes: true,
      value: student,
    });
  }
}
