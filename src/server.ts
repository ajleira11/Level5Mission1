import express from "express";
import env from "dotenv";
import { carValue, riskRating } from "./controller/AllServices";
env.config();

const server = express();
server.use(express.json());

server.post("/api/carValue", (req, res) => {
  const model: string = req.body.model;
  const year: number = req.body.year || 0;
  res.json(carValue(model, year));
});

server.post("/api/riskRating", (req, res) => {
  const claimHistory: string = req.body.claim_history;
  res.json(riskRating(claimHistory));
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`server starterd on port http://localhost:${PORT}`);
});
