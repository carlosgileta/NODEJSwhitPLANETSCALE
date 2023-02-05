import express from "express";

import db from "./config/db.js" // se importa la conexion a la base de datos 
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 3000);

//middleware con este middlewareentiende lso cuerpos en formato JSON
app.use(express.json());

// estas son las rutas


app.use("/", indexRouter);
// con esta linea de codigo se seleccionan todas las rutas las cuales no fueron especificadas por el programador como un error
app.use("*", (req, res) => {
    res.send("404 - not found")
} );



// inicia el servidor
app.listen(app.get("port"), () => {
    console.log('Server is running on port', app.get("port"))
});

// con esto se conecta a la base de datos
db.connect().then(()=> {
    console.log("Connected to database");
}). catch((err) => {
    console.log("Eror", err);
});