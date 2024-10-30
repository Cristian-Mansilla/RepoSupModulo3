import { useEffect, useState } from "react";
// import { myAppointments } from "../helpers/myAppointments";
import { Appointment } from "../components/Appointment";
import style from "../styles/Appointment.module.css"
import axios from "axios";

export const MisTurnos = () => {
  //? ESTADOS
  const [btnCancelActive, setBtnCancelActive] = useState(false)
  // PARA GUARDAR LOS TURNOS EN UN ESTADO
  const [turnos, setTurnos] = useState([]); 
  const [id, setId] = useState(0);
  console.log(turnos);

  // MONTAJE PARA HACER UNA PETICION AL BACK
  useEffect(() => {
    //! AXIOS
    axios.get("http://localhost:4040/appointments")
    .then((res) => setTurnos(res.data))

    //! FETCH
    // fetch("http://localhost:4040/appointments")
    // .then((response) => response.json())
    // .then((data) => setTurnos(data))
  }, []);

  const handleBtnCancelActive = () => {
    setBtnCancelActive(true);
  };

  const handleCancelAppointment = (id) => {
    setId(id);  // ATRAPO EL ID DEL TURNO QUE QUIERO CANCELAR
    console.log(`Turno ${id} cancelado!`)
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Mis Turnos</h1>
      <div className={style.container}>
        {turnos.map((turno) => {
          return (
            <Appointment
              key={turno.id}
              id={turno.id}
              date={turno.date}
              time={turno.time}
              status={turno.status}
              handleCancelAppointment={handleCancelAppointment}
              handleBtnCancelActive={handleBtnCancelActive}
            />
          );
        })}
      </div>
    </div>
  );
};
