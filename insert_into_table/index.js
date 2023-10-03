const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example',
});

const sql = `
    INSERT INTO 
    user(username, email, password, age)
    VALUES('maya404', 'mayakattie@gmail.com', 'ilovecoding', 20)
`;

conn.connect((err) => {
    if(err) throw err;
    conn.query(sql, (err, res) => {
        if(err) throw err;
        console.log('record addded to user table!', res);
    });
});
