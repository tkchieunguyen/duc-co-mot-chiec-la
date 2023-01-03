const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs'
})

//simple querry
connection.query(
    'SELECT * FROM `user`',
    function (err, result, field) {
        console.log('>>>>check sql connecttion')
        console.log(result);
    }
);
module.exports = { mysql, }
