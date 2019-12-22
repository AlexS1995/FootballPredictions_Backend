const Bet = require('../models/BetModel.js');

exports.get_my_bets = function(req, res){
    Bet.find({uid: req.body.uid}, function (err, bets) {
        res.json(bets);
    });
}

exports.create_bet = function(req, res){
    let bet = new Bet({
        uid: req.body.uid,
        timestamp: req.body.timestamp,
        date: req.body.date,
        matches: req.body.matches
    });

    bet.save().then(
        result => res.json({success : true, result: result})
    )
    .catch(
        err => {
            res.json({success: false, result: err})
        }
    );
}

exports.delete_bet = function(req, res){
    Trip.findByIdAndDelete(req.params.bet_id, function (err){
        if (err) {
            res.json(err);
        } else {
            res.json({success: true, message: 'Bet deleted with success'});
        }
    });
}