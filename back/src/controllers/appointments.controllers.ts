import { Request, Response } from "express";
import { getAllAppointmentsSVC, getAppointmentByIdSVC, createAppointmentSVC, cancelAppointmentSVC } from "../services/appointments.services";
import { Appointment } from "../entities/Appointment";
// import IAppointment from "../interfaces/IAppointment";

export const getsAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const appointments: Appointment[] = await getAllAppointmentsSVC();  
    console.log(!appointments)
    return res.status(200).json(appointments)
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

export const getAppointmentById = async (req: Request, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  try {
    const appointment: Appointment | null = await getAppointmentByIdSVC(id);
    return appointment
    ? res.status(200).json(appointment)
    : res.status(404).json({message:`❌ No se encontro el turno ${id}`})
  } catch (error) {
    return res.status(500).json({
      error
    })
  }
};

export const createdAppointment = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, date, time } = req.body;
    const newAppointment: Appointment | null = await createAppointmentSVC({userId, date, time})
    return newAppointment 
    ? res.status(201).json(newAppointment)
    : res.status(400).json({message:"❌ No se pudo agendar el turno solicitado"})
  } catch (error) {
    return res.status(500).json({
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
      error: (error as Error).message
    })
  }
};
