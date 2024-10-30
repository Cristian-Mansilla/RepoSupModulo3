import express from "express";
import routers from "./routes";
import morgan from "morgan";
import cors from "cors";

//! CONFIGURACION DEL SERVIDOR

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(routers);

export default server; //? solo se exporta el servidor de express