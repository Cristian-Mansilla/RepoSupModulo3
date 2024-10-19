//! SE ESTABLECE LA CONEXION CON LA DB, SE LAVANTA EL SERVIDOR Y PONEMOS A LA ESCUCHA EN PUERTO 4040 || 3000 POR DEFECTO
import server from "./server";
import { PORT } from "./config/envs";
import { AppDataSource, connectDatabase } from "./config/data-source";
import "reflect-metadata";

try { //! RELEGO RESPONSABILIDADES AL CONECTAR LA DB EN OTRO MODULO CON SU PROPIO CATCH
  connectDatabase();
  server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
} catch (error) {
  console.log(error);
}

/* //! LEVANTAMOS TODO EN BLOQUE, SI LA DB CAE TAMBIEN EL SERVIDOR
AppDataSource.initialize()  //? inicializamos la coneccion a la BDD de postgres configurada en "data-source"
.then(() => {
  console.log("✅DATABASE CONNECTION SUCCESS");
  server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
})
.catch((error) => console.log(error));
*/

// server.listen(PORT, () => {
//   console.log(`Servidor escuchando en puerto ${PORT}`);
// })
