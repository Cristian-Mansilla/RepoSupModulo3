//! En el servicio de turnos:

//todo [1] - Implementar una función que pueda retornar el arreglo completo de turnos.

//todo [2] - Implementar una función que pueda obtener el detalle de un turno por ID.

//todo [3] - Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID
//todo     - del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

//todo [4] - Implementar una función que reciba el id de un turno específico y una vez identificado el
//todo     - turno correspondiente, cambiar su estado a “cancelled”.

import AppointmentDTO from "../interfaces/dto/AppointmentDTO";
import { appointmentsStatus } from "../utils/enums/appointmentsStatus";
import { AppointmentModel, UserModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
// import { appointmentsDB, getId, incrementId } from "../utils/DB_APPOINTMENTS";
// import IAppointment from "../interfaces/IAppointment";

export const getAllAppointmentsSVC = async (): Promise<Appointment[]> => {
  const appointments: Appointment[] = await AppointmentModel.find({
    relations: { user: true },
  });
  return appointments;
};

export const getAppointmentByIdSVC = async (
  id: number
): Promise<Appointment> => {
  const appointment: Appointment | null = await AppointmentModel.findOne({
    where: { id },
    relations: { user: true },
  });
  if (!appointment || appointment == null) throw new Error(`Turno con id ${id} no encontrado`);
  return appointment;
};

export const createAppointmentSVC = async (
  appointmentDATA: AppointmentDTO
): Promise<Appointment> => {
  if (
    appointmentDATA.userId ||
    appointmentDATA.service ||
    appointmentDATA.date ||
    appointmentDATA.time
  ) {
    const findUser: User | null = await UserModel.findOne({
      where: { id: appointmentDATA.userId },
    });
    if (!findUser || findUser == null) throw new Error(`Usuario no encontrado`);
    const newAppointment: Appointment = await AppointmentModel.create({
      user: findUser,
      time: appointmentDATA.time,
      status: appointmentsStatus.ACTIVE,
      date: new Date(appointmentDATA.date),
      service: appointmentDATA.service,
    });
    const result = AppointmentModel.save(newAppointment);
    return result;
  } else throw new Error(`Faltan datos`);

  //! LOGICA PARA DB LOCAL
  /*
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
  const findAppointment: Appointment | null = await AppointmentModel.findOne({
    where: { id },
    relations: { user: true },
  });
  if (findAppointment) {
    findAppointment.status = appointmentsStatus.CANCELLED;
    await AppointmentModel.save(findAppointment);
    console.log("se guardaron los cambios");
    
  } else throw new Error(`Turno no encontrado`);

  //! reemplaze las siguientes lineas por un middleware
  // const findAppointment: IAppointment | undefined = appointmentsDB.find(appointment => { return appointment.id == id })
  // console.log(findAppointment);
  // if (findAppointment) findAppointment.status = appointmentsStatus.CANCEL
  // else throw new Error(`No existe el turno que decea cancelar`);

  //! LOGICA PARA DB LOCAL
  /*
  const findAppointment = appointmentsDB.find((appointment) => {
    return appointment.id === id;
  });
  findAppointment!.status = appointmentsStatus.CANCELLED;
  */
};
