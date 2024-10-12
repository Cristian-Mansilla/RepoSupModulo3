//! En el servicio de turnos:

//todo [1] - Implementar una función que pueda retornar el arreglo completo de turnos.

//todo [2] - Implementar una función que pueda obtener el detalle de un turno por ID.

//todo [3] - Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID
//todo     - del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

//todo [4] - Implementar una función que reciba el id de un turno específico y una vez identificado el
//todo     - turno correspondiente, cambiar su estado a “cancelled”.

import { appointmentsDB, getId, incrementId } from "../utils/DB_APPOINTMENTS";
import IAppointment from "../interfaces/IAppointment";
import AppointmentDTO from "../interfaces/dto/AppointmentDTO";
import { appointmentsStatus } from "../utils/enums/appointmentsStatus"

export const getAllAppointmentsSVC = () => {
  return appointmentsDB;
};

export const getAppointmentByIdSVC = async (id: number): Promise<IAppointment> => {
  const appointment = appointmentsDB.find((appointment: IAppointment) => {
    return appointment.userId == id;
  });
  if (!appointment)
    throw new Error(`Turno con id ${id} no encontrado`);
  return appointment;
};

export const createAppointmentSVC = async (appointmentDATA: AppointmentDTO): Promise<IAppointment> => {
  const newAppointment: IAppointment = {
    id:getId(),
    userId: appointmentDATA.userId,
    service: appointmentDATA.service,
    status: appointmentsStatus.ACTIVE,
    date: appointmentDATA.date,
    time: appointmentDATA.time,
  };
  appointmentsDB.push(newAppointment);
  incrementId();
  return newAppointment;
};

export const cancelAppointmentSVC = async (id: number) => {
  //! reemplaze las siguientes lineas por un middleware
  // const findAppointment: IAppointment | undefined = appointmentsDB.find(appointment => { return appointment.id == id })
  // console.log(findAppointment);
  // if (findAppointment) findAppointment.status = appointmentsStatus.CANCEL
  // else throw new Error(`No existe el turno que decea cancelar`);

  const findAppointment = appointmentsDB.find(appointment => {
    return appointment.id === id
  });
  findAppointment!.status = appointmentsStatus.CANCELLED;
}; 