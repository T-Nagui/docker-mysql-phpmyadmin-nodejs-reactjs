const express = require('express');
const mysql = require("mysql");
const Sequelize = require('sequelize');

const seq = new Sequelize('database', 'username', 'password');
const app = express(); 

const PORT = process.env.PORT || 5000 ; 

var connection = mysql.createConnection({
  host: "172.18.0.1",
  user: "sampleuser",
  database:"sampledb",
  password: "samplepassword",
  port: 3308
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!"); 
  connection.query("SELECT * FROM test", function (err, result, fields) {
    if (err) throw err;
    console.log(result); 
  });
}); 
 
app.get('/', (req, res)=>{
    const obj = { a: 1 };
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(obj)); 
}); 


app.listen(PORT, ()=>{
    console.log(`server is runing in port ${PORT} http://localhost:${PORT}`);
})
