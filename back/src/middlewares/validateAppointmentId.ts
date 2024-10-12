import { Request, Response, NextFunction } from "express";
import { appointmentsDB } from "../utils/DB_APPOINTMENTS";
import IAppointment from "../interfaces/IAppointment";

export const validateAppointmentId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id = Number(req.params.id);
  const appointmentIndex = appointmentsDB.findIndex((appointment: IAppointment) => {
    return appointment.id == id;
  });
  if (appointmentIndex !== -1) next();
  else
    return res.status(400).json({
      message: `❌ No hay ningun turno agendado para esa id.`,
    });
};
