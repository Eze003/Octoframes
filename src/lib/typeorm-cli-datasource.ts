import "reflect-metadata";
import { DataSource } from "typeorm";
import { Portfolio } from "../entities/Portfolio";
import { ContactMessage } from "../entities/ContactMessage";
import { BlogPost } from "../entities/BlogPost";
import { Setting } from "../entities/Setting";
import { Testimonial } from "../entities/Testimonial";
import * as dotenv from "dotenv";

dotenv.config();

export default new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: [Portfolio, ContactMessage, BlogPost, Setting, Testimonial],
  migrations: ["src/migrations/*.ts"],
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});
