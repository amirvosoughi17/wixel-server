-- CreateTable
CREATE TABLE "Showcase" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "teches" TEXT[],
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "instagramHref" TEXT NOT NULL,
    "webHref" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Showcase_pkey" PRIMARY KEY ("id")
);
