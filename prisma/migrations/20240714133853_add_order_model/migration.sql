/*
  Warnings:

  - You are about to drop the `Employe` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "WebType" AS ENUM ('ecommerce', 'learning', 'company', 'personal', 'startup');

-- CreateEnum
CREATE TYPE "UsersCount" AS ENUM ('TEN', 'FIFTY', 'FIVE_HUNDRED', 'ONE_THOUSAND');

-- DropTable
DROP TABLE "Employe";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "typeOfWeb" "WebType" NOT NULL,
    "monthlyUsersCount" "UsersCount" NOT NULL,
    "likedWebsiteUrls" TEXT[],

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
