
import PizzaModel from "../db/models/pizzaModel.mjs"
import IngredientModel from "../db/models/ingredientsModel.mjs"


async function GetIngredients(req,res){
    try{
    let data = await IngredientModel.find({},{_id:0})
    res.status(200).json(data)
    }catch(e){
        console.log(e)
        res.status(404).send("error occured")
    }
    
}

async function GetPizza(req,res){
    try {
        let data = await PizzaModel.find({},{_id:0})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(404).send('error occued')
    }
}

export {GetIngredients,GetPizza}