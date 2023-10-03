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
    VALUES ?
`

const values = [
    ['ilovejane', 'janedoe@gmail.com', '12345678', 34],
    ['michael', 'mika@gmail.com', 'michaelismyname', 16],
    ['aliceblue', 'alicebrighton@yahoo.com', 'password', 43],
    ['neobright', 'nelsonmanda@gmail.com', 'nodeisfun', 67],
];


conn.connect((err) => {
    if(err) throw err;

    conn.query(sql, [values], (err, res) => {
        if(err) throw err;
        console.log('records added to user table!', res);
    });
});


