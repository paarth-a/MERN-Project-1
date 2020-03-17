const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");





const app = express();
const port = 5000;






app.use(cors());
app.use(express.json());
require('dotenv').config();
const uri = process.env.ATLAS_URI;
mongoose.set('useCreateIndex', true);
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
mongoose.set('useUnifiedTopology', true);
connection.once('open', ()=>{console.log("Successfull connection");});


const commentRouter = require('./routes/comments');
const usersRouter =require('./routes/users');


app.use('/comments', commentRouter);
app.use('/users', usersRouter);


app.listen(port, ()=>{console.log("Server is running on:"+port);});