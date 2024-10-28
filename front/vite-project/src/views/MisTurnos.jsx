import { useState } from "react";
import { myAppointments } from "../helpers/myAppointments";
import { Appointment } from "../components/Appointment";
import style from "../styles/Appointment.module.css"

export const MisTurnos = () => {
  //? ESTADO
  const [turnos, setTurnos] = useState(myAppointments);
  console.log(turnos);

  const handleCancelAppointment = (id) => {
    console.log(`Turno ${id} cancelado!`)
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Mis Turnos</h1>
      <div>
        {turnos.map((turno) => {
          return (
            <Appointment
              key={turno.id}
              id={turno.id}
              date={turno.date}
              time={turno.time}
              status={turno.status}
              handleCancelAppointment={handleCancelAppointment}
            />
          );
        })}
      </div>
    </div>
  );
};
