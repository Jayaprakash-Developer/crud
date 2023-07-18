/*
  Warnings:

  - You are about to drop the column `Fname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Lname` on the `user` table. All the data in the column will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `Fname`,
    DROP COLUMN `Lname`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
