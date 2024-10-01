import mongoose from "mongoose";

const PizzaSchema = new mongoose.Schema({
    "id": String,
  "type": String,
  "price": Number,
  "name": String,
  "image": String,
  "description": String,
  "ingredients": [String],
  "topping": [String]
})

const PizzaModel = mongoose.model('pizza1',PizzaSchema,'pizza')

export default PizzaModel
