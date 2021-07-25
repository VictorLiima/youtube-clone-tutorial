import { MongoClient } from "mongodb";

const DATABASE_URL = process.env.MONGODB_URL
const DATABASE_NAME = process.env.MONGODB_NAME

const DATABASE_CACHE;
const CLIENT_CACHE;

if(!DATABASE_URL){
    throw new Error(
        'Por favor defina a variável de ambiente DATABASE_URL',
    );
}

if(!DATABASE_NAME){
    throw new Error(
        'Por favor defina a variável de ambiente DATABASE_NAME',
    );
}

export async function connectToDatabase(){
    if(CLIENT_CACHE && DATABASE_CACHE){
        return{ client: CLIENT_CACHE, database: DATABASE_CACHE };
    }

    const client = await MongoClient.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const database = await client.db(DATABASE_NAME);

    DATABASE_CACHE = database;
    CLIENT_CACHE = client;

    return{ client, database }
}

export default connectToDatabase;