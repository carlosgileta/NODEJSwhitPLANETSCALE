import { Router } from "express";

import countryRouter from "./country.route.js";

// con esto se importan las rutas
const indexRouter = Router();

//prefijo para las rutas
const prefix = "/api";

// definicion de rutas, es una URL oara cada cosa que quieres llamar en la API que s eva crear
indexRouter.get(prefix, (req, res) => {
    res.send("welcome to Planetscale API");
});

// el `${}` sirve para poner una variable o una constante en los codigos JSX
indexRouter.use(`${prefix}/country`, countryRouter);






//es para exportar las rutas
export default indexRouter;