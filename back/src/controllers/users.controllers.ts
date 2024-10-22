import { Request, Response } from "express";
import {
  getUsersSVC,
  getUserByIdSVC,
  registerUserSVC,
  loginSVC,
  deleteUserByIdSVC,
} from "../services/users.services";
import { User } from "../entities/User";
// import IUser from "../interfaces/IUser";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users: User[] = await getUsersSVC();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User | null = await registerUserSVC({ name, email, birthdate, nDni, username, password });
    return newUser
    ? res.status(201).json(newUser)
    : res.status(400).json({ message: "Faltan datos." })
  } catch (error) {
    return res.status(500).json({
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
    const user = await deleteUserByIdSVC(id);
    return user
    ? res.status(201).json({message: `Se elimino correctamente el usuario con id: ${id}`})
    : res.status(404).json({message: `No se encontro ningun usuario bajo el id ${id}`})
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = Number(req.params.id);
    const user: User | null = await getUserByIdSVC(id);
    return user 
    ? res.status(200).json(user)
    : res.status(404).json({ message: `Usuario con id ${id} no existe.` })
  }
  catch (error) {
    return res.status(500).json({
        error
    })
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;
    const userLogin = await loginSVC(username, password);
    return res.status(200).json(userLogin)
  } catch (error) {
    return res.status(500).json({
      error
    })
  }
};
