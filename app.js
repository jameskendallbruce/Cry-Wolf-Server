/**
 * app.js
 * desc: runs the application. This is all fairly boilerplate right now.
 * 
 * Author: James Kendall Bruce
 * Version: 1.0--05/19/2023
 */

//Basic variables for the server, database and app
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
//const books = require('./routes/api/books');
const characters = require('./routes/api/characters');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//Default output
app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
//app.use('/api/books', books);
app.use('/api/characters', characters);

//establishing the port
const port = process.env.PORT || 8082;

//listening at the port
app.listen(port, () => console.log(`Server running on port ${port}`));

/**
 * Sample boiler plate mongodb connection
 * 
 * const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://crywolfdev:<password>@cluster0.gsnfxko.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
 */