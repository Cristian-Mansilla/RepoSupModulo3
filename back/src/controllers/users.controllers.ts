import { Request, Response } from "express";
import {
  getUsersSVC,
  getUserByIdSVC,
  registerUserSVC,
  loginSVC,
  deleteUserByIdSVC,
} from "../services/users.services";
import IUser from "../interfaces/IUser";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const usersDB: IUser[] = await getUsersSVC();
    return res.status(200).json(usersDB);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Ups... ocurrio un problema al obtener una lista de usuarios",
      error,
    });
  }
};

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: IUser = await registerUserSVC({ name, email, birthdate, nDni, username, password });
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Ups, algo salio mal durante la creacion de un nuevo usuario",
      error,
    });
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = Number(req.params.id);
    await deleteUserByIdSVC(id);
    return res.status(201).json({
      message: `Se elimino correctamente el usuario con id: ${id}`
    });
  } catch (error) {
    return res.status(500).json({
      message: "No se encontro dicho usuario",
      error: (error as Error).message
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = await getUserByIdSVC(id);
    return res.status(200).json(user);
  }
  catch (error) {
    return res.status(500).json({
        message: "Ocurrio un problema al buscar al usuario solicitado",
        error: (error as Error).message
    })
  }
};

export const login = async () => {};
