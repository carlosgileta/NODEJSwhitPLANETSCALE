import db from "../config/db.js";

// esto es para traer la consulta de la base de datos de los paises, se crea un query con el excute
export const getCountries = () =>{
    return new Promise((resolve, reject) => {
        // tenemos la query que vamso a ejectur
        const query = "SELECT * FROM country";
        
        db.execute(query)
        .then((result) => resolve(result))
        .catch(() => reject(err));
    });

};
export const getCountry = (id) =>{
    return new Promise((resolve, reject) => {
       
        const query = "SELECT * FROM country WHERE id = ?";
        
        db.execute(query, [id])
        .then((result) => resolve(result))
        .catch(() => reject(err));
    });

};

export const createCountry = (country) => {
    return new Promise((resolve, reject) => {
       
        // con esta query escribimos en la base de datos cada valor en cada parte de la tabla
        const query = "INSERT INTO  country (name, capital, currency) VALUES (?, ?, ?)";
        //traemos el pais del cual recibimos extraemos los datos solicitadoes
        const {name, capital, currency} = country;
        // y eso se lo pasamos a nuestra query y queda asociado a lso signos de interrogacion
        db.execute(query, [name, capital, currency])
        .then((result) => resolve(result))
        .catch(() => reject(err));
    });

};

export const updateCountry = (id, country) => {
    return new Promise((resolve, reject) => {
       
        // con esta query escribimos en la base de datos cada valor en cada parte de la tabla
        const query = "UPDATE country SET name = ?, capital = ?, currency = ? WHERE id = ?";
        //traemos el pais del cual recibimos extraemos los datos solicitadoes
        const {name, capital, currency} = country;
        // y eso se lo pasamos a nuestra query y queda asociado a lso signos de interrogacion
        db.execute(query, [name, capital, currency, id])
        .then((result) => resolve(result))
        .catch(() => reject(err));
    });

};

export const deleteCountry = (id) =>{
    return new Promise((resolve, reject) => {
       
        const query = "DELETE FROM country WHERE id = ?";
        
        db.execute(query, [id])
        .then((result) => resolve(result))
        .catch(() => reject(err));
    });

};
