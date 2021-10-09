// Imports
const express = require('express')
const bodyParser = require('body-parser')
const apiRouter = require('./apiRouter').router;

const server = express() // Instance of server 

const cors = require('cors')
server.use(
    cors({
        origin: '*'
    })
)

server.use(express.json()) // Body-parser deprecated

// Configure Routes 
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html'),
        res.status(200).send('<h1>Hi on my server</h1>')
})

server.use('/api/', apiRouter)

// Launch server
server.listen(3000, function () {
    console.log('Server is listening !')
})

/**const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;
const path = require('path');
const app = express();

// cryptage email //
require('dotenv').config()

// Bodyparser configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// avoid XSS injection //
const helmet = require("helmet");
app.use(helmet());

Rate Limit 
const rateLimit = require("express-rate-limit");
const { Server } = require('http');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 10 requests per windowMs
  message: "Trop de requêtes, veuillez réessayer après 15 minutes."
});
app.use(limiter);


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  res.status(200).send('<h1>Bienvenue sur mon serveur</h1>')
  next()
});

console.log('Le serveur écoute !')

app.use('/api/', apiRouter);


module.exports = app;
**/