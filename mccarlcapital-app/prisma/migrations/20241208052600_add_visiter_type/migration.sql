/*
  Warnings:

  - Added the required column `type` to the `Visiter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visiter" ADD COLUMN     "type" TEXT NOT NULL;
