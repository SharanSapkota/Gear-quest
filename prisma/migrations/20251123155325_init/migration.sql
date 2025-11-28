/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Bike` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `PaymentTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductAssigned` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bike" DROP CONSTRAINT "Bike_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentTransaction" DROP CONSTRAINT "PaymentTransaction_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productPriceId_fkey";

-- DropForeignKey
ALTER TABLE "ProductAssigned" DROP CONSTRAINT "ProductAssigned_assignedToId_fkey";

-- DropForeignKey
ALTER TABLE "ProductAssigned" DROP CONSTRAINT "ProductAssigned_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "ProductAssigned" DROP CONSTRAINT "ProductAssigned_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductImage" DROP CONSTRAINT "ProductImage_productId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_productId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Bike" DROP COLUMN "categoryId",
ADD COLUMN     "subcategoryId" INTEGER;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "PaymentTransaction" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Rental" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "productId";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductAssigned";

-- DropTable
DROP TABLE "ProductImage";

-- CreateTable
CREATE TABLE "Subcategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" INTEGER,
    "categoryId" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT NOT NULL,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subcategory_name_key" ON "Subcategory"("name");

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Subcategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "Subcategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
