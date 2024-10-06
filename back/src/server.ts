import express from "express";
import routers from "./routes";
import morgan from "morgan";

//! LAVANTO EL SERVIDOR Y ESTE USARA LA RUTA DEFINIDA EN "ROUTER"

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(routers);

export default server; //? solo se exporta el servidor de express