//! DB LOCAL DE USUARIOS

import IUser from "../interfaces/IUser";

export const db_users: IUser[] = [];

let id: number = 1;
export const getId = () => id;
export const incrementId = () => id++;