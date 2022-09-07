const express = require('express')
const mysql = require('mysql')
const Database = require('../config/db.config')
const router = express.Router()
const connection  =mysql.createConnection(Database.database)

connection.connect(function (err) {
    if(err) {
        console.log(err);
    } else {
        
        var customertable = "CREATE TABLE IF NOT EXISTS customer(id VARCHAR(255)PRIMARY KEY, name VARCHAR(255), address TEXT, salary DOUBLE)"
        connection.query(customertable, function(err,result) {
          
        })
    }
}) 

router.get('/', (req, res) => {
    var getAllQuery = "SELECT * FROM customer";
    connection.query (getAllQuery,(err, rows) => {
         if(err) console.log(err);
         res.send(rows);
    })
})

router.post('/',(req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const contact = req.body.contact;

    var saveQuery = "INSERT INTO customer(id,name,address,contact) VALUES(?,?,?,?)";

    connection.query(saveQuery,[id,name,address,salary], (err) => {
        if (err) {
            res.send({"message" : "same key"})

        } else {
            res.send({"message" : "Customer details is ok"})
        }
    }) 
})
