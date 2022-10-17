import dotenv from "dotenv"
import  app from "./app"
import connectDatabase from "./config/database"

// dotenv.config({ path: "config/config.env" })

// console.log(process.env.PORT)

const port = process.env.PORT || 4000;

connectDatabase() 

const server = app.listen(port, () => console.log('Server started on port ' + port));
