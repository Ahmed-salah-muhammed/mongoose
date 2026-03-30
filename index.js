import mongoose from "mongoose";
import express from "express";
import router from "./routes/users.js";

const app = express();
const port = process.env.PORT || 3000;

const uri = "mongodb://localhost:27017/mongo";

mongoose
  .connect(uri)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(port, () => console.log(`server started on port ${port}...`));
