/*
  Warnings:

  - You are about to drop the column `arrivaldate` on the `flight` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `hotel` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `price` on the `transport` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `flight` DROP COLUMN `arrivaldate`;

-- AlterTable
ALTER TABLE `hotel` MODIFY `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `transport` MODIFY `price` DOUBLE NOT NULL;
