// /appointments
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
// GET /appointments => Obtener el detalle de un turno específico.
// POST /appointments/schedule => Agendar un nuevo turno.
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.

import { Router } from "express";
import { getsAppointments, addAppointment, getAppointmentById, cancelAppointment } from "../controllers/appointments.controllers";

const router : Router = Router();

router.get("/", getsAppointments);

router.get("/:id", getAppointmentById);

router.post("/schedule", addAppointment);

router.put("/cancel/:id", cancelAppointment);

export default router;