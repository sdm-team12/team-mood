import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardText } from 'material-ui/Card';
// import TextField from 'material-ui/TextField';
import Auth from '../modules/Auth';

import HappyIndexForm from './happy-index-form';
import NoteList from './note-list';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: ''
    };

    this.getSuccessPage = this.getSuccessPage.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentWillMount() {
      this.getSuccessPage();
    }

  getSuccessPage() {
    var userID = Auth.getUser();
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/successPage');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // Set the authorization HTTP setRequestHeader
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
            this.setState({
              notes: xhr.response
          });
          console.log(this.state.notes);
        }
    });
    xhr.send();
    this.setState({ notes: ' '  });

    // create an AJAX request
    xhr.open('post', '/api/emailSurvey');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            //email Sent
        } else {
            // failure
            const errors = xhr.response.errors ? xhr.response.errors : {};
            errors.summary = xhr.response.message;
        }
    });
    xhr.send();
  }

  getUserInfo() {
    axios.get("/api/user")
        .then((response) => {
            console.log(response);
        })
  }

  render() {
    return (
      <div>
        
      <Card className="container" style={{
          width: '70%',
          padding: '10px',
          paddingLeft: "65px"
    }}>
      
        <CardTitle
          title="Dashboard"
          subtitle="User Happiness Index."
        />
        {this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Hello, {this.props.secretData}</CardText>}
        <HappyIndexForm onFormSubmit={this.getSuccessPage} />
      </Card>
      <NoteList notes={this.state.notes} />
    </div>
    );
  }
}

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};