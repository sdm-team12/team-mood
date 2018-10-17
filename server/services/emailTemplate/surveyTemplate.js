module.exports = (survey, creator) => {
    return `
<html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>survey.description</p>
          <div>
            <a href="keys.feedbackDomain/survey.id/positive">Yes</a>
          </div>
          <div>
            <a href="keys.feedbackDomain{survey.id}/neutral">Neutral</a>
          </div>
          <div>
            <a href="keys.feedbackDomain}survey.id}/negative">No</a>
          </div><br>
          <div>
            <p>Regards,</p>
            <p{creator}</p>
          </div>
        </div>
      </body>
    </html>
`;
};