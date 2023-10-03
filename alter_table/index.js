const mysql = require('mysql');



const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});


const sql = 'ALTER TABLE user ADD COLUMN age INT UNSIGNED';

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, (err, res) => {
        if(err) throw err;
        console.log('column added to user table!', res);
    });
});
