const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'rtr',
    port: '3306'
})

connection.connect(function (err) {
    if (err) {
        console.log.err('error: ' + err.message)
    }
    console.log('Connected to the MySQL server.')
})

//simple querry
connection.query(
    'SELECT * FROM `employees`;',
    function (err, result, field) {
        console.log('>>>>check sql connecttion')
        console.log(result);
    }
);
module.exports = { connection, }
