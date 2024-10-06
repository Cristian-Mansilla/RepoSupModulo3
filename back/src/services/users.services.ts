import IUser from "../interfaces/IUser";
import UserDTO from "../interfaces/UserDTO";
import { db_users, getId, incrementId } from "../utils/DB_LOCAL";

export const getUsersSVC = async (): Promise<IUser[]> => {
  return db_users;
};

export const registerUserSVC = async (userData: UserDTO): Promise<IUser> => {
  const newUser: IUser = {
    id: getId(),
    name: userData.name,
    email: userData.email,
    active: userData.active,
  };
  db_users.push(newUser);
  incrementId();
  return newUser;
};

export const deleteUserByIdSVC = async (id: number): Promise<void> => {
  const userIndex = db_users.findIndex((user: IUser) => user.id === id);    //findIndex busca el primer indice que tenga un id que cohincida con la propiedad id de un usuario  
  if (userIndex !== -1) {                                                   //si lo encontro retorna la posicion que ocupa el usuario en el array, sino retorna -1 y se lanza un error
    db_users.splice(userIndex, 1);
  }
  else {
    throw new Error(`Usuario con id ${id} no encontrado`);
  };
};

export const getUserByIdSVC = async (id: number) => {
  const user = db_users.filter((user: IUser) => {
    return user.id == id;
  });
  if (!user || user.length === 0)
    throw new Error(`Usuario con id ${id} no encontrado`);
  return user;
};

export const loginSVC = async () => {};
