import IUser from "../interfaces/IUser";
import UserDTO from "../interfaces/UserDTO";
import {db_users, getId, incrementId} from "../utils/DB_LOCAL";

export const svc_getUsers = async() => {
  return db_users;
};

export const svc_createUser = async (userData: UserDTO) : Promise<IUser> => {
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

export const svc_deleteUser = async () => {};
