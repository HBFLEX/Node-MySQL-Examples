const mysql = require('mysql');


// create and pass connection values
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

// connect to the server
conn.connect((err) => {
    if(err) throw err;
    console.log('connected successfully!');
});
