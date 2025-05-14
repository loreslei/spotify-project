import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://lorennaaguiar2005:wKxVEOt6oTmAZfYH@cluster0.apai6bi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const cliente = new MongoClient(URI);

export const db = cliente.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

