const express = require('express');
const app = express();
const MongoClient=require('mongodb').MongoClient;


const port = process.env.PORT || 3000;

app.listen(port)
console.log('server started');