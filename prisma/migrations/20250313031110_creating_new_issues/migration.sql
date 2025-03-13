/*
  Warnings:

  - You are about to alter the column `title` on the `issue` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(254)`.

*/
-- AlterTable
ALTER TABLE `issue` MODIFY `title` VARCHAR(254) NOT NULL;
