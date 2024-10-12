import express from "express";
import routers from "./routes";
import morgan from "morgan";

//! CONFIGURACION DEL SERVIDOR

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(routers);

export default server; //? solo se exporta el servidor de express