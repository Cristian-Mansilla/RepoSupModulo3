//! En el servicio de credenciales:

//todo [1] - Implementar una función que reciba username y password y cree un nuevo par de credenciales 
//todo     - con estos datos. Debe retornar el ID del par de credenciales creado.

//todo [2] - Implementar una función que recibirá username y password, y deberá chequear si el nombre de 
//todo     - usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de 
//todo     - que la validación sea exitosa, deberá retornar el ID de las credenciales.

import ICredential from "../interfaces/ICredential";
import { CredentialDTO } from "../interfaces/dto/CredentialDTO";
import { credentialDB, getId, incrementId } from "../utils/DB_CREDENTIAL";

export const createCredential = (username: string, password:string): number => {
  const newCredential : ICredential = {
    id: getId(),
    username: username,
    password: password,
  };
  credentialDB.push(newCredential);
  incrementId();
  return newCredential.id;
};

export const checkCredential = (credentialDATA: CredentialDTO) => {
  const credentialFound = credentialDB.find(
    (credential) => credentialDATA.username === credential.username
  );
  if (credentialFound) {
    if (credentialFound?.password === credentialDATA.password) {
      return credentialFound.id;
    } else throw new Error("Las contraseñas no concuerdan");
  } else throw new Error("No se encontro un usuario con esas credenciales");
};
