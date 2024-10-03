import server from "./server";
import { PORT } from "./config/envs";

//! PONEMOS AL SERVIDOR A LA ESCUCHA EN PUERTO 4040 || 3000 POR DEFECTO

server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
})
