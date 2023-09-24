const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function connectToDb(){
    try{
        await client.connect();
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('Error while connecting to DB : ', error);
    }
}

module.exports = {
    client,
    connectToDb
}