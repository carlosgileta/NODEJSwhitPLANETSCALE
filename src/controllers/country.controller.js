// Un controlador es una funcion que se encarga de recibir  la peticion del cliente web o mandar esa peticion y entender que servicio debe de usar
// para realizar una consulta a la base de datos
import * as countryServices from "../services/country.service.js";

export const getCountries = (req, res) => {
    countryServices
    .getCountries()
    .then((result)=> {
        // si tenemso una repsuesta satisfactoria tene4mos una respuesta 200 y el mensaje del resultado
        res.status(200).json({   
            message: "Countries retrevied succefully",
            data: result[0],
        });
    })
    .catch((err)=>{
        res.status(500).send("Error");
    });
};

export const getCountry = (req, res) => {
    const {id} = req.params;
    countryServices
    .getCountry(id)
    .then((result)=> {
        res.status(200).json({   
            message: "Country retrevied succefully",
            data: result[0],
        });
    })
    .catch((err)=>{
        res.status(500).send("Error");
    });
};

export const createCountry = (req, res) => {
    const country = req.body;
    countryServices
    .createCountry(country)
    .then(()=> {
        res.status(200).json({   
            message: "Country create succefully",
            data: country,
        });
    })
    .catch((err)=>{
        res.status(500).send("Error");
    });
};

export const updateCountry = (req, res) => {
    const country = req.body;
    const {id} = req.params;
    countryServices
    .updateCountry(id, country)
    .then(()=> {
        res.status(200).json({   
            message: "Country update succefully",
            data: country,
        });
    })
    .catch((err)=>{
        res.status(500).send("Error");
    });
};

export const deleteCountry = (req, res) => {
    const {id} = req.params;
    countryServices
    .deleteCountry(id)
    .then((result)=> {
        res.status(200).json({   
            message: "Country deleted succefully",
            data: result[0],
        });
    })
    .catch((err)=>{
        res.status(500).send("Error");
    });
};
