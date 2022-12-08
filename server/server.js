import express from "express";
import cors from "cors";
import { router as memberRouter } from "./routes/memberRouter.js";

const app = express();
const port = 4000;

app.get("/api", (req, res) => {
  res.send("Server is running");
});

app.use(express.json());
app.use(cors());

app.use("/api/members", memberRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
