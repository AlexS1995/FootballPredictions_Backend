const express = require('express');
const bodyParser = require('body-parser');

//const config = require('./config');
const mongoose = require('mongoose');
//const request = require('request');

const app = express();

//Database setup
mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true}, { useUnifiedTopology: true })
.then(() => console.log("Connected to database"))
.catch( err => console.error("Error"));

//Middleware setup
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Controller setup
const bet_controller = require('./controllers/BetController');

//Routes setup
const apiRoutes = express.Router();

apiRoutes.post('/bets', bet_controller.create_bet);

apiRoutes.get('/bets', bet_controller.get_my_bets);

apiRoutes.delete('/bets/:bet_id', bet_controller.delete_bet);

app.use('', apiRoutes);


//Start Server

//const port = process.env.PORT || 8080 || 3000;
const port = 3000;

//mongoose.connect(config.databasecloud, {useNewUrlParser: true});

//app.set('secret_key', config.secret_key);


app.listen(port);

console.log("Starting server...");