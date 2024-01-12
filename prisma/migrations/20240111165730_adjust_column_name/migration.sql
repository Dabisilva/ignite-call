/*
  Warnings:

  - You are about to drop the column `oberservations` on the `schedulings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `schedulings` DROP COLUMN `oberservations`,
    ADD COLUMN `observations` VARCHAR(191) NULL;
