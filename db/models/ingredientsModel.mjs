import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema({
    "id": Number,
    "tname": String,
    "price": Number,
    "image": String
})

const IngredientModel = mongoose.model('ingredients1',IngredientSchema,'ingredients')

export default IngredientModel
