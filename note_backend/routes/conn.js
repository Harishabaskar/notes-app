import  {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connect(){
    try{
        await client.connect();
        console.log("successfully connected");
    }catch(error){

        console.log("Not connected");

    }
}
// const databaseName = 'backend'
// const client = new mongodb.MongoClient(connectionURL, { useNewUrlParser: true })


// client.connect((error, client) => {
//     if(error){
//         return console.log('Unable to connect to database')
//     }
//     console.log(`Connected correctly`)
// });

export {client,connect};