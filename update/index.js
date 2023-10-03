const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});

const new_username = 'mikemike';
const id = 3;
const sql = "UPDATE user SET username=? WHERE id=?";

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, [new_username, id], (err, res, fields) => {
        if(err) throw err;
        console.log('record updated!', res);
    });
});




