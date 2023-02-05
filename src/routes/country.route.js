import { Router } from "express";
import { getCountries, 
    getCountry, 
    createCountry, 
    updateCountry, 
    deleteCountry
} from "../controllers/country.controller.js";

const countryRouter = Router();

// trae todos lso paises con el verbo get 
countryRouter.get("/", getCountries );

//trae un pais con el verbo get y espesificando el pais con el :id
countryRouter.get("/:id", getCountry);
 // crea un pais con el verbo post
countryRouter.post("/", createCountry);
// modifica un pais con el verbo put
countryRouter.put("/:id", updateCountry);
// elimina un pais con el verbo delete
countryRouter.delete("/:id", deleteCountry);



export default countryRouter;