import { Request, Response, NextFunction } from "express";
import { User } from "../entities/User";
import { UserModel } from "../config/data-source";
// import { usersDB } from "../utils/DB_USER";
// import IUser from "../interfaces/IUser";

export const validateUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  console.log(req.body);

  const userId = req.body;
  const id = Number(req.params.id);
  const findUser: User | null = await UserModel.findOne({
    where: { id },
  });
  if (findUser) next();
  else return res.status(400).json({
    message: `❌Error. No puede agendar un turno para un usuario que no existe. Usuario con id: ${userId} no se encuentra registrado`,
  });

  /*  //! LOGICA PARA DB LOCAL
  const { userId } = req.body;
  const userIndex = usersDB.findIndex((user: IUser) => {
    return user.id === userId;
  }); 
  //?findIndex busca el primer indice que tenga un id que cohincida con la propiedad id de un usuario
  if (userIndex !== -1) next();
  else
    return res.status(400).json({
      message: `❌Error. No puede agendar un turno para un usuario que no existe. Usuario con id: ${userId} no se encuentra registrado`,
    });
    */
};
