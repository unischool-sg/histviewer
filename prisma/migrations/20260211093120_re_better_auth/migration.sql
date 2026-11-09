/*
  Warnings:

  - You are about to drop the `histories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "histories" DROP CONSTRAINT "histories_userId_fkey";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isTeacker" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "histories";
