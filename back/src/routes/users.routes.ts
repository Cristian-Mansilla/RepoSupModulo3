// /users
// GET /users => Obtener el listado de todos los usuarios.
// GET /users/:id => Obtener el detalle de un usuario específico.
// POST /users/register => Registro de un nuevo usuario.
// POST /users/login => Login del usuario a la aplicación.

import { Router } from "express";
import { registerUser, getUsers, getUserById, login, deleteUserById } from "../controllers/users.controllers";
import { auth } from "../middlewares/auth";


const router : Router = Router();

router.get("/", getUsers);          //? las rutas estaticas o especificas van al principio

router.get("/:id", getUserById);    //? las rutas dinamicas o menos especificas van al final de la lista de metodos

router.delete("/:id", deleteUserById);

router.post("/register", registerUser);

router.post("/login", login);

export default router;