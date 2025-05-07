const { MongoClient } = require('mongodb');


const url = "mongodb+srv://Pranavkakde:Pranav613@cluster0.fufh1.mongodb.net/"; 


const database = 'student'; 

const client = new MongoClient(url);

const dbConnect = async () => {
    const result = await client.connect();
    const db = result.db(database); 
    return db.collection('profile'); 
}

module.exports = dbConnect;
