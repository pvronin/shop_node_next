-- CreateTable
CREATE TABLE "discounts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "percent" INTEGER NOT NULL,
    "start_date" TIMESTAMPTZ(6) NOT NULL,
    "end_date" TIMESTAMPTZ(6) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "discounts_discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productcategories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(120) NOT NULL,

    CONSTRAINT "productcategories_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productcomments" (
    "id" SERIAL NOT NULL,
    "reviewer_name" VARCHAR(255) NOT NULL,
    "reviewer_email" VARCHAR(254) NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "productcomment_review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "thumbnail" VARCHAR(500) NOT NULL,
    "stock" INTEGER NOT NULL,
    "dimensions" JSONB NOT NULL,
    "meta" JSONB NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "category_relation_id" INTEGER,

    CONSTRAINT "products_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50),
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(100),
    "last_name" VARCHAR(100),
    "phone" VARCHAR(20),
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "role" VARCHAR(30) NOT NULL DEFAULT 'user',
    "last_login_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "label" VARCHAR(100),
    "full_name" VARCHAR(150) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "province" VARCHAR(100) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "postal_code" VARCHAR(20) NOT NULL,
    "address_line" TEXT NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "discounts_discount_product_id_fb618410" ON "discounts"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "productcategories_category_name_key" ON "productcategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "productcategories_category_slug_key" ON "productcategories"("slug");

-- CreateIndex
CREATE INDEX "productcategories_category_name_8822d12d_like" ON "productcategories"("name");

-- CreateIndex
CREATE INDEX "productcategories_category_slug_cf095243_like" ON "productcategories"("slug");

-- CreateIndex
CREATE INDEX "productcomment_review_product_id_3b33a816" ON "productcomments"("product_id");

-- CreateIndex
CREATE INDEX "products_product_category_relation_id_802ba1b2" ON "products"("category_relation_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "addresses_user_id_idx" ON "addresses"("user_id");

-- AddForeignKey
ALTER TABLE "discounts" ADD CONSTRAINT "discounts_discount_product_id_fb618410_fk_products_product_id" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "productcomments" ADD CONSTRAINT "productcomment_revie_product_id_3b33a816_fk_products_" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_category_relation_id_802ba1b2_fk_productca" FOREIGN KEY ("category_relation_id") REFERENCES "productcategories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
