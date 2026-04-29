-- This is an empty migration.
CREATE UNIQUE INDEX one_default_address_per_user
ON "addresses"("user_id")
WHERE "is_default" = true;
