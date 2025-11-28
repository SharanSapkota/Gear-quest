-- DropIndex
DROP INDEX "Subcategory_name_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'name',
ALTER COLUMN "description" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Subcategory" ALTER COLUMN "name" SET DEFAULT 'name',
ALTER COLUMN "description" DROP DEFAULT;
