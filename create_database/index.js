const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

const sql = "CREATE DATABASE example";

conn.connect((err) => {
    if(err) throw err;
    console.log('connected successfully!');

    conn.query(sql, (err, res) => {
        if(err) throw err;
        console.log('database created!', res);
    });
});





