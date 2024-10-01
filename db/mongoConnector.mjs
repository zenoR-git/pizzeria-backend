import mongoose from 'mongoose'


async function ConnectDB(){
const url = 'mongodb://localhost:27017/pizzeria'

    try{
     await mongoose.connect(url)
    }
   catch(error){
    console.log('connection failed');
    console.log(error)   
}
    
console.log('connection successful')

}

export default ConnectDB




