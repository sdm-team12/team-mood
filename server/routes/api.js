const express = require('express');

// Import data models
var HappinessFact = require('../models/happinessFact');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
    console.log("response"+res);
    res.status(200).json({ 
        message: "You're authorized to see this dashboard"
    });
});

router.post('/happiness', (req, res) => {
    console.log(req.body);
    var submission = new HappinessFact({
        teamID: req.body.userID,
        selfHappiness: req.body.selfHappiness,
        teamHappiness: req.body.teamHappiness
    });

    // console.log(req);
    // console.log(submission);

    submission.save(function (err, data) {
        if (err) return console.error(err); else 
        res.status(200).json({
            userData: submission,
        });
    });
    
});

router.get('/thank-you', (req, res) => {
    res.status(200).json({
        message: "Thank You For Filling The Survey",
    });
});

router.get('/successPage', (req, res) => {
    console.log("response"+res);
    res.status(200).json({
        
        message: "Thank You"
    });
});



module.exports = router;