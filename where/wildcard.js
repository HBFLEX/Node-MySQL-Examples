const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});

const sql = "SELECT * FROM user WHERE email LIKE 'jane%'";

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, (err, res, fields) => {
        if(err) throw err;
        console.log(res);
    });
});




