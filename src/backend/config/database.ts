import * as mongoose from "mongoose";

const uri =
  "mongodb+srv://matiw01:ZXLQkKdSLQ3UzSNE@swarmchecktest.rzraxy6.mongodb.net/swarmchecktest?retryWrites=true&w=majority";

const connectDatabase = () => {
  mongoose
    .connect(uri)
    .then((con) => console.log("Database connected on HOS " + con.connection.host))
    .catch((err) => console.error(err));
};

export default connectDatabase;