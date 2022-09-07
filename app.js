const express = require ('express')
const customer =require ('./routes/customer')
const item = require ('./routes/item')
const order =require ('./routes/order')

const app =express()
const port=3000

app.use(express.json())

app.use('./Customer',customer)
app.use('./Item',item)
app.use('./Order',order)

app.get('./',(req,res)=> {
    res.send('hello Express!')
})

app.listen(port,()=>{
    console.log(`Exaple app listening on port ${port}`)
})