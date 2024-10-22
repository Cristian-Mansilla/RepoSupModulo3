//! En el servicio de usuarios:

//todo [1] - Implementar una función que pueda retornar el arreglo completo de usuarios.

//todo [2] - Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado
//todo     - por id.

//todo [3] - Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta
//todo     - que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando
//todo     - a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de
//todo     - las credenciales, debe guardar el dato en la propiedad credentialsId.

import UserDTO from "../interfaces/dto/UserDTO";
import { User } from "../entities/User";
import { UserRepo } from "../repositories/UserRepository";
import { checkCredentialSVC } from "./credentials.services";
// import IUser from "../interfaces/IUser";
// import { usersDB, getId, incrementId } from "../utils/DB_USER";

//! servicio para obtener todos los usuarios con sus credenciales
export const getUsersSVC = async (): Promise<User[]> => {
  const users = await UserRepo.allUsers();
  return users;
};

export const registerUserSVC = async (
  userData: UserDTO
): Promise<User | null> => {
  //TODO podria ser un middleware?
  if (
    userData.name ||
    userData.email ||
    userData.nDni ||
    userData.birthdate ||
    userData.username ||
    userData.password
  ) {
    const newUser: User = await UserRepo.registerUser(userData);
    return newUser;
  } else return null;

  /* //! LOGICA PARA LA BD LOCAL
  const newUser: IUser = {
    id: getId(),
    name: userData.name,
    email: userData.email,
    active: true,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    credentialsId: await createCredential(userData.username, userData.password)
  };
  usersDB.push(newUser);
  incrementId();
  return newUser;
  */
};

export const deleteUserByIdSVC = async (id: number): Promise<boolean> => {
  const res = await UserRepo.deleteUser(id);
  return res;

  /* //! LOGICA PARA DB LOCAL
  const userIndex = usersDB.findIndex((user: IUser) => user.id === id);    //findIndex busca el primer indice que tenga un id que cohincida con la propiedad id de un usuario  
  if (userIndex !== -1) {                                                   //si lo encontro retorna la posicion que ocupa el usuario en el array, sino retorna -1 y se lanza un error
    usersDB.splice(userIndex, 1);
  }
  else {
    throw new Error(`Usuario con id ${id} no encontrado`);
  };
  */
};

export const getUserByIdSVC = async (id: number): Promise<User | null> => {
  const res = await UserRepo.findUserById(id);
  return res;

  /* //! LOGICA PARA DB LOCAL
  const user = usersDB.find((user: IUser) => {
    return user.id == id;
  });
  if (!user)
    throw new Error(`Usuario con id ${id} no encontrado`);
  return user;
  */
};

export const loginSVC = async (username: string, password: string): Promise<number> => {
  const result = await checkCredentialSVC(username, password);
  return result;
};
