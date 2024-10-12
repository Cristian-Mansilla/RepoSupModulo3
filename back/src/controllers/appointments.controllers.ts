import { Request, Response } from "express";
import { getAllAppointmentsSVC, getAppointmentByIdSVC, createAppointmentSVC, cancelAppointmentSVC } from "../services/appointments.services";
import IAppointment from "../interfaces/IAppointment";

export const getsAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const appointmentsDB: IAppointment[] = await getAllAppointmentsSVC();  
    return res.status(200).json(appointmentsDB);
  } catch (error) {
    return res.status(404).json({
      message: "❌ No se encontro ningun turno agendado.",
      error,
    });
  }
};

export const getAppointmentById = async (req: Request, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  try {
    const appointment: IAppointment = await getAppointmentByIdSVC(id);
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(400).json({
      message: `❌ No se encontro el turno para el usuario de id ${id}, asegurese de que el usuario se encuentre creado primero`,
      error
    })
  }
};

export const createdAppointment = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, service, date, time } = req.body;
    const newAppointment = await createAppointmentSVC({userId, service, date, time})
    return res.status(201).json(newAppointment);
  } catch (error) {
    return res.status(400).json({
      message:"❌ No se pudo agendar el turno solicitado",
      error
    })
  }
};

export const cancelAppointment = async (req: Request, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  try {
    await cancelAppointmentSVC(id);
    return res.status(200).json({
      message:`✅El turno con id ${id} a sido cancelado`
    })
  } catch (error) {
    return res.status(400).json({
      message:`❌ No hay ningun turno agendado para el id ${id}`,
      error
    })
  }
};
