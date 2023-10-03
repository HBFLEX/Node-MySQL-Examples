const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});

const age = 67;
const sql = "SELECT * FROM user WHERE age = ?";

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, [age], (err, res, fields) => {
        if(err) throw err;
        console.log(res);
    });
});




