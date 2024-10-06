import { Router } from "express";
import usersRouter from "./users.routes";
import appointmentsRouter from "./appointments.routes";

//! LA RUTA ANALIZA HACIA DONDE SE REALIZA UNA SOLICITUD HTTP, SI ES A "/USERS" O A "/APPOINTMENTS"

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/appointments", appointmentsRouter);

export default router;
