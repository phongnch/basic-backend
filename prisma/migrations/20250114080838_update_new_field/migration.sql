/*
  Warnings:

  - Added the required column `image` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;
