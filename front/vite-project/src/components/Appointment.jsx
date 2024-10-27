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

export const Appointment = ({ id, date, time, status }) => {
  return (
    <>
      <h3>Turno</h3>
      <p>{id}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{status}</p>
    </>
  );
};
