import { Request, Response } from "express";
import coachRouter from "../routes/coach.route";
import CoachService from "../services/coachService";

export default class CoachController {
  service: CoachService;
  constructor(service: CoachService) {
    this.service = service;
  }

  post = async (req: Request, res: Response) => {
    const coach = await this.service.post(req.body);

    res.status(200).json({
      succes: true,
      value: coach,
    });
  };

  get = async (req: Request, res: Response) => {
    const coach = await this.service.get();

    res.status(200).json({
      succes: true,
      value: coach,
    });
  };

  addStudent = async (req: Request, res: Response) => {
    const [coach, succes] = await this.service.addStudent(req.body);

    res.status(200).json({
      succes: succes,
      value: coach,
    });
  };

  delete = async (req: Request, res: Response) => {
    const [coach, succes] = await this.service.delete(req.body)

        res.status(200).json({
          succes: succes,
          value: coach,
        });
  }
}
