import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import AppointmentDTO from "../interfaces/dto/AppointmentDTO";
import { appointmentsStatus } from "../utils/enums/appointmentsStatus";

export const AppRepo = AppDataSource.getRepository(Appointment).extend({
  
    allAppointments: async function (): Promise<Appointment[]> {
    const appointments: Appointment[] = await this.find({
      relations: { user: true },
    });
    return appointments;
  },

  appointmentById: async function (id: number): Promise<Appointment | null> {
    const appointment: Appointment | null = await this.findOne({
      where: { id },
      relations: { user: true },
    });
    if (appointment) return appointment;
    else return null;
  },

  createNewAppointment: async function (user: User, data: AppointmentDTO) {
    const newAppointment: Appointment = this.create({
      user: user,
      time: data.time,
      status: appointmentsStatus.ACTIVE,
      date: new Date(data.date),
    });
    const result = this.save(newAppointment);
    return result;
  },
});
