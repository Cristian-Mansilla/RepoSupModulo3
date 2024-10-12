import ICredential from "../interfaces/ICredential";

export const credentialDB: ICredential[] = [];
let id: number = 1;

export const getId = () => id ;
export const incrementId = () => id++;