//todo 1- instalar la biblioteca prop-types para definir los tipos de las propiedades que tu componente espera recibir
// npm i prop-types
//todo 2- importa PropTypes
// import PropTypes from 'prop-types';
//todo 3- Define las Validación de las propiedades
/*
Appointment.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  };
*/
import style from "../styles/Appointment.module.css";

export const Appointment = ({ id, date, time, status, handleCancelAppointment }) => {
  
  const cancelarTurno = () => {
    handleCancelAppointment(id)
  }

  const random = () => {
    let trow = Math.round(Math.random()*1);
    // console.log(trow)
    return (trow == 0)? "🤕":"🤒";
  }

  return (
    <div className={style.patients}>
      <h3>{random()} Paciente:</h3>
      <p>🗝️Id: {id}</p>
      <p>🗓️Fecha: {date}</p>
      <p>🕑Hora: {time}</p>
      <p className={style[status]}>{status.toUpperCase()}</p>
      <div>
        <button disabled={status=="cancelled"} onClick={cancelarTurno} className={style[status]}>Cancelar</button>
      </div>
    </div>
  );
};
