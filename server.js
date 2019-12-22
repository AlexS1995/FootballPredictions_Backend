const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


const app = express();

//Database setup
mongoose.connect(process.env.MONGOLAB_OLIVE_URI, {useNewUrlParser: true})
.then(() => console.log("Connected to database"))
.catch( err => console.error(process.env.MONGODB_URI));

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
const port = 3000;

app.listen(port);

console.log("Starting server...");