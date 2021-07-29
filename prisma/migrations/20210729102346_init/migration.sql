-- CreateEnum
CREATE TYPE "Level" AS ENUM ('beginner', 'intermediate', 'expert');

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "time" INTEGER NOT NULL,
    "level" "Level" NOT NULL,

    PRIMARY KEY ("id")
);
