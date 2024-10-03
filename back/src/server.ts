import express from "express";
import router from "./routes";

//! LAVANTO EL SERVIDOR Y ESTE USARA LA RUTA DEFINIDA EN "ROUTER"

const server = express();

server.use(express.json());
server.use(router);

export default server; //? solo se exporta el servidor de express