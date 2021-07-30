import { Games, Level, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const getGamesByLevel = async (level: Level) => {
  const games = await prisma.games.findMany({
    where: {
      level: level,
    },
    orderBy: {
      time: "asc",
    },
  });
  return games;
};

export const getBestGamesByLevel = async (req: Request, res: Response) => {
  try {
    const beginnerGames = await getGamesByLevel("beginner");
    const intermediateGames = await getGamesByLevel("intermediate");
    const expertGames = await getGamesByLevel("expert");

    const results: {
      [level in Level]: Array<Games>;
    } = {
      beginner: beginnerGames,
      intermediate: intermediateGames,
      expert: expertGames,
    };

    res.send({ info: "Successfully got games", data: results });
  } catch (error) {
    res.send({ info: `Error getting games by level: ${error}`, error });
  }
};

export const createGame = async (req: Request, res: Response) => {
  try {
    const { name, time, level } = req.body;
    const createdGame = await prisma.games.create({
      data: {
        name,
        time,
        level,
      },
    });
    res.send({ info: "Successfully created game", data: createdGame });
  } catch (error) {
    res.send({ info: `Error creating game: ${error}`, error });
  }
};
