import server from "./server";
import { PORT } from "./config/envs";

//! LAVANTO EL SERVIDOR Y PONEMOS A LA ESCUCHA EN PUERTO 4040 || 3000 POR DEFECTO

server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
})
