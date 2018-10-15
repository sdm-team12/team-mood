const express = require('express');
const sgMail = require('@sendgrid/mail');

// Import data models
var HappinessFact = require('../models/happinessFact');
const surveyTemplate = require('./../services/emailTemplate/surveyTemplate');

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
        if (err) return console.error(err);
        console.log(data);
    });
});

router.get('/successPage', (req, res) => {
    console.log("response"+res);
    res.status(200).json({
        
        message: "Thank You"
    });
});

// create new survey- /api/surveys/new
router.post('/emailSurvey', async(req, res) => {
    // Send an Email
    try {
        // const user_name = `Rohit Dang`;
        // const mailer = new Mailer(surveyTemplate(user_name));
        // const response = await mailer.send();
        sgMail.setApiKey("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");
        const msg = {
            to: 'rohit.dang@icloud.com',
            from: 'feedback@team-mood.com',
            subject: 'Survey: How happy are you?',
            html: '<html> <body><div style="text-align: center;"><h3>Hi Rohit!</h3><p>This is a reminder for you to fill the happiness levels.</p><p>Please click <a href="http://localhost:8000/">here</a> to do so.</p><br><p>Thank you for your contribution.</p><div><p>Regards,</p><p>Team Mood Research Team</p></div></div></body></html>',
        };
        const response = sgMail.send(msg);

        res.send(response);
    } catch (e) {
        console.log(e);
        res.status(422).send(e)
    }


});



module.exports = router;    