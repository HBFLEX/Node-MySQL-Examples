const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});

const sql = "DELETE FROM user WHERE email='janedoe@gmail.com'";

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, (err, res, fields) => {
        if(err) throw err;
        console.log('Number of records deleted!', res.affectedRows);
    });
});




