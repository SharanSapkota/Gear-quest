-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "description" TEXT DEFAULT 'Test';

-- AlterTable
ALTER TABLE "Subcategory" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "description" SET DEFAULT 'Test';
