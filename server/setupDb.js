import mysql from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASS, DB_USER, DB_PORT } from './env.js';

async function setupDb() {

    let connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        port: DB_PORT
    });
    // await connection.execute(`DROP DATABASE IF EXISTS \`${DB_DATABASE}\``);
    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${DB_DATABASE}\``);
    connection.query(`USE \`${DB_DATABASE}\``);

    await usersTable(connection);
    await masterTable(connection);

    return connection;
}

async function usersTable(db) {
    try {
        const sql = `CREATE TABLE IF NOT EXISTS users (
            id int(10) NOT NULL AUTO_INCREMENT,
            username varchar(80) NOT NULL,
            email varchar(60) NOT NULL,
            password_hash varchar(200) NOT NULL,
            isBlocked tinyint(1) NOT NULL DEFAULT 0,
            createdAt timestamp NOT NULL DEFAULT current_timestamp(),
            PRIMARY KEY (id)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci`;
        await db.execute(sql);
    } catch (error) {
        console.log('Nepavyko sukurti users lenteles');
        console.log(error);
        throw error;
    }
}

async function masterTable(db) {
    try {
        const sql = `CREATE TABLE IF NOT EXISTS master (
            id int(10) NOT NULL AUTO_INCREMENT,
            name varchar(80) NOT NULL,
            lastname varchar(100) NOT NULL,
            specialization varchar(100) NOT NULL,
            cover varchar(200) NOT NULL,
            service_id(10),
            votes int(10), 
            city varchar(100) NOT NULL,
            PRIMARY KEY (id)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci`;
        await db.execute(sql);
    } catch (error) {
        console.log('Nepavyko sukurti charity lenteles');
        console.log(error);
        throw error;
    }
}
export const connection = await setupDb();