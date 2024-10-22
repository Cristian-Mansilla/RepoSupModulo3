import { DataSource } from "typeorm";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  // dropSchema: true,
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  subscribers: [],
  migrations: [],
});

//! AL CREAR UNA FUNCION PARA CONECTAR CON EL SERVIDOR, SEPARAMOS RESPONSABILIDADES EH IMPIDO QUE EL SERVIDOR SE CAIGA
export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅DATABASE CONNECTION SUCCESS");
  } catch (error) {
    console.log(error);
  }
};