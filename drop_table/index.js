const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});

const sql = "DROP TABLE user";

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, (err, res) => {
        if(err) throw err;
        console.log('Table(user) deleted successfully!');
    });
});




