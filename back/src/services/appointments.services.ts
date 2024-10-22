//! En el servicio de turnos:

//todo [1] - Implementar una función que pueda retornar el arreglo completo de turnos.

//todo [2] - Implementar una función que pueda obtener el detalle de un turno por ID.

//todo [3] - Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID
//todo     - del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

//todo [4] - Implementar una función que reciba el id de un turno específico y una vez identificado el
//todo     - turno correspondiente, cambiar su estado a “cancelled”.

import AppointmentDTO from "../interfaces/dto/AppointmentDTO";
import { appointmentsStatus } from "../utils/enums/appointmentsStatus";
import { Appointment } from "../entities/Appointment";
import { AppRepo } from "../repositories/AppointmentRepository";
import { User } from "../entities/User";
import { UserRepo } from "../repositories/UserRepository";
// import { appointmentsDB, getId, incrementId } from "../utils/DB_APPOINTMENTS";
// import IAppointment from "../interfaces/IAppointment";

export const getAllAppointmentsSVC = async (): Promise<Appointment[]> => {
  const response: Appointment[] = await AppRepo.allAppointments();
  return response;
};

export const getAppointmentByIdSVC = async (
  id: number
): Promise<Appointment | null> => {
  const appointment: Appointment | null = await AppRepo.appointmentById(id);
  return appointment;
};

export const createAppointmentSVC = async (
  appointmentDATA: AppointmentDTO
): Promise<Appointment | null> => {
  if (
    appointmentDATA.userId ||
    appointmentDATA.date ||
    appointmentDATA.time
  ) {
    const findUser: User | null = await UserRepo.findUserByIdWithoutRelation(appointmentDATA.userId);
    if (findUser) {
      const newAppointment: Appointment = await AppRepo.createNewAppointment(findUser, appointmentDATA)
      return newAppointment;
    } else return null
  } else return null;

  /* //! LOGICA PARA DB LOCAL
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
  */
};

export const cancelAppointmentSVC = async (id: number): Promise<void> => {
  const findAppointment: Appointment | null = await AppRepo.appointmentById(id);
  if (findAppointment) {
    findAppointment.status = appointmentsStatus.CANCELLED;
    await AppRepo.save(findAppointment);
    console.log("se guardaron los cambios");
    
  } else throw new Error(`Turno no encontrado`);

  //! reemplaze las siguientes lineas por un middleware
  // const findAppointment: IAppointment | undefined = appointmentsDB.find(appointment => { return appointment.id == id })
  // console.log(findAppointment);
  // if (findAppointment) findAppointment.status = appointmentsStatus.CANCEL
  // else throw new Error(`No existe el turno que decea cancelar`);

  /* //! LOGICA PARA DB LOCAL
  const findAppointment = appointmentsDB.find((appointment) => {
    return appointment.id === id;
  });
  findAppointment!.status = appointmentsStatus.CANCELLED;
  */
};
