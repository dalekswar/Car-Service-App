-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_regionId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_roleId_fkey`;

-- DropIndex
DROP INDEX `User_regionId_fkey` ON `User`;

-- DropIndex
DROP INDEX `User_roleId_fkey` ON `User`;

-- AlterTable
ALTER TABLE `Car` MODIFY `model` VARCHAR(191) NULL,
    MODIFY `year` INTEGER NULL,
    MODIFY `vin` VARCHAR(191) NULL,
    MODIFY `engineType` VARCHAR(191) NULL,
    MODIFY `registrationNumber` VARCHAR(191) NULL,
    MODIFY `pts` VARCHAR(191) NULL,
    MODIFY `sts` VARCHAR(191) NULL,
    MODIFY `status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Region` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `region` VARCHAR(191) NULL,
    MODIFY `district` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `RepairOrder` MODIFY `status` VARCHAR(191) NULL,
    MODIFY `materials` VARCHAR(191) NULL,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `createdBy` INTEGER NULL,
    MODIFY `modifiedBy` INTEGER NULL;

-- AlterTable
ALTER TABLE `Role` MODIFY `name` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `roleId` INTEGER NULL,
    MODIFY `regionId` INTEGER NULL,
    MODIFY `created` DATETIME(3) NULL,
    MODIFY `createdBy` INTEGER NULL;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `position` VARCHAR(191) NULL,
    `salary` DECIMAL(10, 2) NULL,
    `hiredDate` DATETIME(3) NULL,
    `created` DATETIME(3) NULL,
    `createdBy` INTEGER NULL,
    `modified` DATETIME(3) NULL,
    `modifiedBy` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkSchedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeeId` INTEGER NOT NULL,
    `workDate` DATETIME(3) NULL,
    `startTime` DATETIME(3) NULL,
    `endTime` DATETIME(3) NULL,
    `status` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductionCalendar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `workScheduleId` INTEGER NOT NULL,
    `ordersId` INTEGER NOT NULL,
    `workDate` DATETIME(3) NULL,
    `isHoliday` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Part` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `supplierId` INTEGER NULL,
    `price` DECIMAL(10, 2) NULL,
    `lastUpdated` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `repairOrderId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `amount` DECIMAL(10, 2) NULL,
    `paymentDate` DATETIME(3) NULL,
    `paymentMethod` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkSchedule` ADD CONSTRAINT `WorkSchedule_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductionCalendar` ADD CONSTRAINT `ProductionCalendar_workScheduleId_fkey` FOREIGN KEY (`workScheduleId`) REFERENCES `WorkSchedule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_repairOrderId_fkey` FOREIGN KEY (`repairOrderId`) REFERENCES `RepairOrder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
