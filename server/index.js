const express = require('express');
const mysql = require("mysql");

const app = express(); 

const PORT = process.env.PORT || 4000 ; 

var connection = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "s3kreee7"
});

app.get('/', (req, res)=>{
    const obj = { a: 1 };
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(obj)); 
}); 


app.listen(PORT, ()=>{
    console.log(`server is runing in port ${PORT} http://localhost:${PORT}`);
})
