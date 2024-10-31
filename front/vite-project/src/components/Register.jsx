import style from "../styles/Register.module.css";
import { useState } from "react";

export const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    birthdate: "",
    nDni: "",
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const handlerInputChange = (event) => {
    console.log(event)

    const { name, value } = event.target;
    setUserData({
        ...userData, [name]: value
    })
  };

  return (
    <div className={style.container}>
      <h2>Registro</h2>
      <div>
        <form action="">
          <div>
            <label htmlFor="">
              <input
                type="text"
                onChange={handlerInputChange}
                value={userData.name}
                name="name"
                placeholder="Nombre..."
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="date"
                onChange={handlerInputChange}
                value={userData.birthdate}
                name="birthdate"
                placeholder="Nacimiento..."
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="number"
                onChange={handlerInputChange}
                value={userData.nDni}
                name="nDni"
                placeholder="Dni..."
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="email"
                onChange={handlerInputChange}
                value={userData.email}
                name="email"
                placeholder="Email..."
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="text"
                onChange={handlerInputChange}
                value={userData.username}
                name="username"
                placeholder="Usuario..."
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="password"
                onChange={handlerInputChange}
                value={userData.password}
                name="password"
                placeholder="Contraseña..."
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="password"
                onChange={handlerInputChange}
                value={userData.repeatPassword}
                name="repeatPassword"
                placeholder="Confirmar contraseña..."
              />
            </label>
          </div>
          <div className={style.btnSubmit}>
            <button type="submit">Registrarme</button>
          </div>
        </form>
      </div>
    </div>
  );
};
