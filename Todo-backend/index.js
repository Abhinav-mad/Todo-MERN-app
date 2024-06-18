const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const taskroutes = require('./routes/taskroutes')
require('dotenv').config()


const app = express();
const PORT = 3000

//mongodb connection uri in the .env file
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB:', err);
});



app.use(cors());
app.use(bodyParser.json());

app.options('*', cors()); 


app.use('/api/tasks', taskroutes);   //all the routes in the routes folder


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });