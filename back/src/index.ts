import server from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";
import "reflect-metadata";

//! SE ESTABLECE LA CONEXION CON LA DB, SE LAVANTA EL SERVIDOR Y PONEMOS A LA ESCUCHA EN PUERTO 4040 || 3000 POR DEFECTO

AppDataSource.initialize()  //? inicializamos la coneccion a la BDD de postgres configurada en "data-source"
.then(() => {
  console.log("✅DATABASE CONNECTION SUCCESS");
  server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
})


// server.listen(PORT, () => {
//   console.log(`Servidor escuchando en puerto ${PORT}`);
// })
