"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const AllServices_1 = require("./controller/AllServices");
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.post("/api/carValue", (req, res) => {
    const model = req.body.model;
    const year = req.body.year || 0;
    res.json((0, AllServices_1.carValue)(model, year));
});
server.post("/api/riskRating", (req, res) => {
    const claimHistory = req.body.claim_history;
    res.json((0, AllServices_1.riskRating)(claimHistory));
});
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`server starterd on port http://localhost:${PORT}`);
});
