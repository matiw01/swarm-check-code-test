import { Router } from "express";
import CoachController from "../controlers/coachControler";
import CoachService from "../services/coachService";

const coachService = new CoachService();
const coachController = new CoachController(coachService);

const coachRouter = Router();
coachRouter.route("/add-coach").post(coachController.post);
coachRouter.route("/get-coaches").get(coachController.get);
coachRouter.route("/add-student").put(coachController.addStudent);
coachRouter.route("/delete").delete(coachController.delete);

export default coachRouter;
