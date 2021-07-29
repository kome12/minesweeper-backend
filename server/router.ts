import express from "express";
import { createGame, getBestGamesByLevel } from "./controller";

export const appRouter = express.Router();

appRouter.get("/games", getBestGamesByLevel);

appRouter.post("/games", createGame);
