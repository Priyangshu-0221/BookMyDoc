-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "address" DROP DEFAULT,
ALTER COLUMN "address" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "address" DROP DEFAULT,
ALTER COLUMN "address" SET DATA TYPE TEXT;
