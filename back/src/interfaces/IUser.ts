//! User
// id: ID numérico que identifica al usuario.
// name: nombre completo del usuario.
// email: dirección de email del usuario.
// birthdate: fecha de nacimiento.
// nDni: número de DNI o identificación.
// credentialsId: ID de las credenciales, referencia al par de credenciales que posee el usuario.

export default interface IUser {
  id: number;             //?Primary Key
  name: string;
  email: string;
  active: boolean;
  birthdate: Date;
  nDni: number;
  credentialsId: number;  //?Foreign Key
};
