import express from "express"
import cors from "cors"


import ConnectDB from "./db/mongoConnector.mjs"
import { GetIngredients,GetPizza } from "./controller/internaApi.mjs"

//dataBase

ConnectDB()

//app
const app = express()
app.use(cors())
app.use((req,res,next)=>{
    console.log('request ['+req.method.toUpperCase()+'] ' + req.originalUrl)
    next()
})

//routes goes here


app.get('/api/v1/ingredients',GetIngredients)


app.get('/api/v1/pizza',GetPizza)


app.post('/cart/order',(req,res)=>{
    res.send({message:"success"})
})



app.listen(3001,()=>{
    console.log("connected")
})