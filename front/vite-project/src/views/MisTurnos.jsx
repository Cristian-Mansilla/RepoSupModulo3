import { useState } from "react";
import { myAppointments } from "../helpers/myAppointments";
import { Appointment } from "../components/Appointment";

export const MisTurnos = () => {
  //? ESTADO
  const [turnos, setTurnos] = useState(myAppointments);
  console.log(turnos);

  return (
    <>
      <h1>Mis Turnos</h1>
      <div>
        {turnos.map((turno) => {
          return (
            <Appointment
              key={turno.id}
              id={turno.id}
              date={turno.date}
              time={turno.time}
              status={turno.status}
            />
          );
        })}
      </div>
    </>
  );
};
