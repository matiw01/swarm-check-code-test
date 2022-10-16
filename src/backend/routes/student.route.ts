import { Router } from "express";
import StudentController from "../controlers/studentControler";
import StudentService from "../services/studentService";

const studentService = new StudentService();
const studentController = new StudentController(studentService);

const studentRouter = Router();
studentRouter.route("/add-student").post(studentController.post);
studentRouter.route("/get-students").get(studentController.get);

export default studentRouter;
