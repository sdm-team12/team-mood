const sendGrid = require('sendgrid');
const helper = sendGrid.mail;

class Mailer extends helper.Mail {
    constructor(template) {
        super();

        this.sgApi = sendGrid("TEST-API-KEY");
        this.from_email = new helper.Email('feedback@team-mood.com');
        this.recipients = ["rohit_dang2006@yahoo.com"];
        this.subject = "Team Mood - Survey";
        this.body = new helper.Content('text/html', template);

        this.addContent(this.body);
        this.addClickTracking();
        // this.addRecipients();
    }

    formatEmails(emails) {
        return emails.map(cur => {
           return new helper.Email(cur.email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);

        //this.addRecipients();
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(cur => {
            personalize.addTo(cur);
        });
        this.addPersonalization(personalize);
    }

    async send() {
        try {
            const request = this.sgApi.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: this.toJSON()
            });

            const response = await this.sgApi.API(request);
            return response;
        } catch (err) {
            return err.response.body.errors;
        }
    }

}

module.exports = Mailer;