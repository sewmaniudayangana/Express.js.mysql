const express = require('express')
const mysql = require('mysql')
const databa = require('../config/db.config')
const router = express.Router()
const connection  =mysql.createConnection(databa.database)



 connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        var ordertbl = "CREATE TABLE IF NOT EXISTS order (oid VARCHAR(10 ) PRIMARY KEY, date DATE, cusId VARCHAR(6),CONSTRAINT FOREIGN KEY(cusId) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE)";
        connection.query(ordertbl, function(err,result) {
         
            
        })
    }
})


router.get('/' , (req, res) => {
    var getAllOrderQuery = "SELECT * FROM order";
    connection.query(getAllOrderQuery, (err, rows) => {
         if(err) console.log(err)
         res.send(rows)
    })
})