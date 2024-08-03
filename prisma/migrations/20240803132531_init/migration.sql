/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Order` table. All the data in the column will be lost.
  - Changed the type of `typeOfWeb` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `monthlyUsersCount` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "updatedAt",
DROP COLUMN "typeOfWeb",
ADD COLUMN     "typeOfWeb" TEXT NOT NULL,
DROP COLUMN "monthlyUsersCount",
ADD COLUMN     "monthlyUsersCount" TEXT NOT NULL;
