/*
  Warnings:

  - Added the required column `city` to the `Visiter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Visiter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Visiter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetAddress1` to the `Visiter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetAddress2` to the `Visiter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `Visiter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visiter" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "streetAddress1" TEXT NOT NULL,
ADD COLUMN     "streetAddress2" TEXT NOT NULL,
ADD COLUMN     "zip" TEXT NOT NULL;
