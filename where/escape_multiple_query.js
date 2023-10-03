const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});

const password = '12345676';
const age = 34;
const sql = "SELECT * FROM user WHERE password = ? OR age = ?";

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, [password, age], (err, res, fields) => {
        if(err) throw err;
        console.log(res);
    });
});




