-- AlterTable
ALTER TABLE "Visiter" ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "streetAddress1" DROP NOT NULL,
ALTER COLUMN "streetAddress2" DROP NOT NULL,
ALTER COLUMN "zip" DROP NOT NULL;