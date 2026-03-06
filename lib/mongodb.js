import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb+srv://sulukut7:SevCHAMPION123@feisty0.hcsttm1.mongodb.net/?appName=Feisty0";

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to preserve the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new connection
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;

// Database and collection helpers
export async function getDb() {
  const client = await clientPromise;
  return client.db("feisty");
}

export async function getUsersCollection() {
  const db = await getDb();
  return db.collection("users");
}
