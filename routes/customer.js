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