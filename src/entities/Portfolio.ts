import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("portfolios")
export class Portfolio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  title!: string;

  @Column({ type: "varchar", length: 100 })
  category!: string;

  @Column({ type: "varchar", length: 255 })
  client!: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  year!: string;

  @Column({ type: "text", nullable: true })
  image!: string; // Main hero image URL

  @Column({ type: "text", nullable: true })
  description!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  services!: string;

  @Column({ type: "jsonb", default: [] })
  content!: { type: string; src: string }[]; // Array of media components for the collage

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
