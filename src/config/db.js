import mysql from "mysql2"; // importar la base de datos de MY sql
import dotenv from "dotenv"; //se importa las variables de los. env que son las variables de hambiente

dotenv.config();

const connection = mysql.createConnection(process.env.DATABASE_URL);


export default connection.promise();// esporta un metodo llamado promise para ejectura promesas desde dodne se ejecute la conexion 

