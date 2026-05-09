import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1715288700000 implements MigrationInterface {
    name = 'InitialSchema1715288700000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create Portfolios
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "portfolios" (
                "id" SERIAL PRIMARY KEY,
                "title" varchar(255) NOT NULL,
                "tags" jsonb NOT NULL DEFAULT '[]',
                "client" varchar(255) NOT NULL,
                "year" varchar(10),
                "image" text,
                "description" text,
                "services" varchar(255),
                "content" jsonb NOT NULL DEFAULT '[]',
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )
        `);

        // Ensure 'tags' and 'content' columns exist (in case the table already existed from an older version)
        await queryRunner.query(`ALTER TABLE "portfolios" ADD COLUMN IF NOT EXISTS "tags" jsonb DEFAULT '[]'`);
        await queryRunner.query(`ALTER TABLE "portfolios" ADD COLUMN IF NOT EXISTS "content" jsonb DEFAULT '[]'`);



        // Create Contact Messages
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "contact_messages" (
                "id" SERIAL PRIMARY KEY,
                "firstName" varchar(150) NOT NULL,
                "lastName" varchar(150) NOT NULL,
                "email" varchar(255) NOT NULL,
                "country" varchar(100),
                "companyType" varchar(100),
                "message" text NOT NULL,
                "isRead" boolean NOT NULL DEFAULT false,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now()
            )
        `);

        // Create Blog Posts
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "blog_posts" (
                "id" SERIAL PRIMARY KEY,
                "title" varchar(255) NOT NULL,
                "category" varchar(100) NOT NULL,
                "excerpt" text,
                "content" text NOT NULL,
                "coverImage" text,
                "author" varchar(100),
                "readTime" varchar(10),
                "published" boolean NOT NULL DEFAULT true,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )
        `);

        // Create Settings
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "settings" (
                "key" varchar PRIMARY KEY,
                "value" text NOT NULL,
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )
        `);

        // Create Testimonials
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "testimonials" (
                "id" SERIAL PRIMARY KEY,
                "name" varchar(255) NOT NULL,
                "role" varchar(255),
                "content" text NOT NULL,
                "avatar" text,
                "rating" int DEFAULT 5,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "testimonials"`);
        await queryRunner.query(`DROP TABLE "settings"`);
        await queryRunner.query(`DROP TABLE "blog_posts"`);
        await queryRunner.query(`DROP TABLE "contact_messages"`);
        await queryRunner.query(`DROP TABLE "portfolios"`);
    }
}
