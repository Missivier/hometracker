import { Request, Response } from "express";
import express from "express";
import * as cors from "cors";
import { config } from "dotenv";
import authRoutes from "./routes/auth";

config();

const app = express();
app.use(express.json());
app.use(cors.default());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running 🚀");
});

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
