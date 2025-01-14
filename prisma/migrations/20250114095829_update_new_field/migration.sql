/*
  Warnings:

  - You are about to drop the column `image` on the `item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "item" DROP COLUMN "image",
ADD COLUMN     "phone" TEXT NOT NULL DEFAULT '';
