import IAppointment from "../interfaces/IAppointment";

export const appointmentsDB: IAppointment[] = [];

let id: number = 1;

export const getId = () => id;
export const incrementId = () => id++;