import { useEffect, useState } from "react";
// import { myAppointments } from "../helpers/myAppointments";
import { Appointment } from "../components/Appointment";
import style from "../styles/Appointment.module.css"
import axios from "axios";

export const MisTurnos = () => {
  //? ESTADOS
  // PARA GUARDAR LOS TURNOS EN UN ESTADO
  const [turnos, setTurnos] = useState([]); 
  const [id, setId] = useState(0);
  const [updatePage, setUpdatePage] = useState(false);
  // console.log(turnos);

  // MONTAJE PARA HACER UNA PETICION AL SERVIDOR
  useEffect(() => {
    //! AXIOS CON PROMESAS CON LOS TURNOS DE UN USUARIO EN PARTICULAR
    ;( async() => {
      await axios.get("http://localhost:4040/users/6")
      .then((res) => {
        console.log(res.data)
        setTurnos(res.data)
      })
      .catch((error) => {
        console.log(error)
        alert(error.response.data.message)
      })
    })();

    //! FETCH CON TODOS LOS TURNOS
    // fetch("http://localhost:4040/appointments")
    // .then((response) => response.json())
    // .then((data) => setTurnos(data))

    return () => setTurnos([]); // LIMPIO EL ESTADO DEL COMPONENTE CUANDO SALGO DE LA APP
  }, [updatePage]);

  const handleCancelAppointment = async(id) => {
    try {
      setId(id);  // ATRAPO EL ID DEL TURNO QUE QUIERO CANCELAR
      await axios.put(`http://localhost:4040/appointments/cancel/${id}`);
      setUpdatePage(!updatePage)
      console.log(`Turno ${id} cancelado!`);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Mis Turnos</h1>
      <div className={style.container}>
        {turnos?.appointments?.map((turno) => {
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
