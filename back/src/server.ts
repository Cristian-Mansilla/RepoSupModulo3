const express = require("express");
const server = express();
require("dotenv").config(); //permite que las variables de entorno esten disponibles para utilizar

const PORT = process.env.PORT || 3000;

server.listen(PORT, (req : Request, res : Response) => {
    console.log( `Servidor escuchando en puerto ${PORT}`)
});

module.exports = {
    server
}