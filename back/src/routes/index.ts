import { Request, Response, Router } from "express";
import { createUser, getUsers, deleteUser } from "../controllers/ctrl_Users";

//! LA RUTA ANALIZA HACIA DONDE SE REALIZA UNA SOLICITUD HTTP, EN ESTE CASO
//! DE TIPO GET A "/", Y RESPONDE CON LA FUNCION CALLBACK...

const router: Router = Router();

router.get("/users", getUsers);

router.post("/users", createUser);

router.delete("/", (req: Request, res: Response) => {});

router.get("/algo");

export default router;
