import style from "../styles/Navbar.module.css";
import logo from "../assets/medicine.svg";

export const Navbar = () => {
  return (
    <div className={style.container}>
      <a href="">
        <img className={style.logo} src={logo} alt="logo" />
      </a>
      <div>
        <a href="">Home</a>
        <a href="">Mis Turnos</a>
        <a href="">Contacto</a>
        <a href="">About</a>
      </div>
    </div>
  );
};
