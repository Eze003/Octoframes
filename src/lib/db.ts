import "reflect-metadata";
import { DataSource } from "typeorm";
import { Portfolio } from "@/entities/Portfolio";
import { ContactMessage } from "@/entities/ContactMessage";
import { BlogPost } from "@/entities/BlogPost";
import { Setting } from "@/entities/Setting";
import { Testimonial } from "@/entities/Testimonial";
import { InitialSchema1715288700000 } from "@/migrations/1715288700000-InitialSchema";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: process.env.NODE_ENV !== "production",
  entities: [Portfolio, ContactMessage, BlogPost, Setting, Testimonial],
  migrations: [InitialSchema1715288700000],
  migrationsRun: false,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

/**
 * Next.js hot-reloading safe wrapper for TypeORM Connection.
 * Prevents multiple identical active connection pools in dev mode.
 */
declare global {
  var _databaseSource: DataSource | undefined;
  var _dbPromise: Promise<DataSource> | undefined;
}

export const getDbConnection = async (): Promise<DataSource> => {
  if (global._dbPromise) {
    return global._dbPromise;
  }

  global._dbPromise = (async () => {
    try {
      const isDev = process.env.NODE_ENV !== "production";

      if (global._databaseSource && global._databaseSource.isInitialized) {
        if (isDev) {
          const loadedEntities = global._databaseSource.entityMetadatas.map(
            (m) => m.name,
          );
          const expectedEntities = [
            "Portfolio",
            "ContactMessage",
            "BlogPost",
            "Setting",
            "Testimonial",
          ];
          const missing = expectedEntities.filter(
            (e) => !loadedEntities.includes(e),
          );

          if (missing.length > 0) {
            console.log(
              `⚠️ Missing metadata for ${missing.join(", ")}, forcing re-initialization...`,
            );
            await global._databaseSource.destroy();
            global._databaseSource = undefined;
          } else {
            return global._databaseSource;
          }
        } else {
          return global._databaseSource;
        }
      }

      if (!global._databaseSource) {
        global._databaseSource = AppDataSource;
      }

      if (!global._databaseSource.isInitialized) {
        await global._databaseSource.initialize();
        console.log(
          "🚀 DB connection initialized. Entities:",
          global._databaseSource.entityMetadatas.map((m) => m.name),
        );
      }

      return global._databaseSource;
    } catch (error) {
      global._dbPromise = undefined; // Reset promise on error so we can retry
      throw error;
    }
  })();

  return global._dbPromise;
};

