const express = require('express')
const mysql = require('mysql2')

const app = express();

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'MYSQL_USER',
    password : 'MYSQL_PASSWORD',
    database : 'MYSQL_DATABASE',
    port: 9906
})


connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySql Database =', err )
        return;
    }
   
    console.log('connect successfully');
})

// CREATE ROUTES

// READ
app.get("/read", async (req, res) => {
    try {
        connection.query("SELECT * FROM Employees", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})


app.listen(8787, () => 
console.log('Server is running on port 8787'));