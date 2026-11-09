-- CreateTable
CREATE TABLE "histories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "histories_userId_idx" ON "histories"("userId");

-- AddForeignKey
ALTER TABLE "histories" ADD CONSTRAINT "histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
