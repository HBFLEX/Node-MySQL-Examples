const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});

const sql = `
    CREATE TABLE user(
        id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(50) NOT NULL
    )
`

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, (err, res) => {
        if(err) throw err;
        console.log('table created!', res);
    });
})

