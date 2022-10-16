import express from "express";
import cors from "cors";
import coachRouter from "./routes/coach.route";
import studentRouter from "./routes/student.route";


const app = express();

app.use(cors());

app.use(express.json());

app.use("/coach", coachRouter);
app.use("/student", studentRouter);

export default app;
