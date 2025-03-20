/*
  Warnings:

  - Added the required column `arrivaldate` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departuredate` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `flight` ADD COLUMN `arrivaldate` DATETIME(3) NOT NULL,
    ADD COLUMN `departuredate` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `hotel` ADD COLUMN `city` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userid` INTEGER NOT NULL,
    `destinationid` INTEGER NOT NULL,
    `flightid` INTEGER NOT NULL,
    `hotelid` INTEGER NOT NULL,
    `transportid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
