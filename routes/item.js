const express = require('express')
const mysql = require('mysql')
const databa = require('../config/db.config')
const router = express.Router()
const connection  =mysql.createConnection(databa.database)


//item table
connection.connect(function (err) {
    if(err) {
        console.log(err);
    } else {
        
        var itemtable = "CREATE TABLE IF NOT EXISTS item(itemcode VARCHAR(255)PRIMARY KEY, name VARCHAR(255), qtyonHand INT, unitprice DOUBLE)"
        connection.query(itemtable, function(err,result) {
          
        })
    }
}) 