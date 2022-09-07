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


router.post('/' ,(req,res) =>{
    const oid = req.body.oid
    const date = req.body.cusId

    var saveorderQuery = "INSERT INTO order(oid,date,cusId) VALUES(?,?,?)";
    connection.query(saveorderQuery,[oid,date,cusId], (err) => {
        if (err) {
            res.send({"message": "same orders entry"})
        } else {
            res.send({"message": "orders saved"})
        }  
    })
})




router.delete('/:oid', (req, res) => {
    const oid = req.params.oid
    var deleteorderQuery = "DELETE FROM order WHERE oid=?";
    connection.query(deleteorderQuery, [oid], (err, rows) => {
        if(err) console.log(err);

        if(rows.affectedRows > 0) {
            res.send({"message" : "order was deleted"})
        } else {
            res.send({"message":"data is not found.try it"})
        }
    })
})
module.exports = router;

