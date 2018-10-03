import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardText } from 'material-ui/Card';
// import TextField from 'material-ui/TextField';
import Auth from '../modules/Auth';

import HappyIndexForm from './happy-index-form';
import NoteList from './note-list';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      message: '',
      errors: {}
    };

    this.getSuccessPage = this.getSuccessPage.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getThankYouPage = this.getThankYouPage.bind(this);
  }

  componentWillMount() {
      this.getSuccessPage();
    }

  getSuccessPage() {
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
              message: xhr.response
          });
          console.log(this.state.message);
        }
    });
    xhr.send();
    this.setState({ message: ' '  });
  }

  getUserInfo() {
    axios.get("/api/user")
        .then((response) => {
            console.log(response);
        })
  }

  getThankYouPage() {  
        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/thank-you');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            // success
            // change the component-container state
            this.setState({
              errors: {},
              message: xhr.response.message
            });
    
            this.context.router.replace('/thankyou');
          } else {
            // failure
    
            // change the component state
            const errors = xhr.response.errors ? xhr.response.errors : {};
            errors.summary = xhr.response.message;
    
            this.setState({
              errors
            });
          }
        });
        console.log(this.state.message);
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
        
        {this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Hello, {this.props.secretData}</CardText>
        }
        {this.props.secretData && <HappyIndexForm onFormSubmit={this.getThankYouPage} />}
      </Card>
      <NoteList message={this.state.message} />
      
    </div>
    );
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object.isRequired
};

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};