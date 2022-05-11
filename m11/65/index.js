const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// user: dbuser1
// password: mtl3ZIkbYtT9H4gt


const uri = "mongodb+srv://dbuser1:mtl3ZIkbYtT9H4gt@cluster0.e8p1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("foodExpress").collection("users");
  console.log('db connected');
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log('Listening to port', port)
})