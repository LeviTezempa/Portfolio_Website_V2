import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Unable to connect to database:", err.message);
  });
mongoose.connection.on("error", (err) => {
  console.error(`Database connection error:`, err.message);
});
app.get("/", (req, res) => {
  res.send("Welcome to My Portfolio Backend");
});
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
