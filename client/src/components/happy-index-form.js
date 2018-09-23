import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from '../modules/Auth';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css'

//import images from local
import img1 from './images/200.jpg'
import img2 from './images/201.jpg'
import img3 from './images/202.jpg'
import img4 from './images/203.jpg'
import img5 from './images/204.jpg'


const imageList = [img1, img2, img3, img4, img5]


export default class HappyIndexForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '', image: null, team_image: null };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onPick = this.onPick.bind(this);
        this.onPickTeamImage = this.onPickTeamImage.bind(this);
    }
    
    onInputChange(term) {
        this.setState({ term });
    }
    
    onPick(image) {
        this.setState({image})
    }

    onPickTeamImage(team_image) {
        this.setState({ team_image })
    }
    
    onSubmit(event) {
        event.preventDefault();
        
        console.log("Submit: " + this.state.term);
        
        
        // create a string for an HTTP body message
        const userID = encodeURIComponent(Auth.getUser());
        const selfHappiness = this.state.image.value;
        const teamHappiness = this.state.team_image.value;
        const formData = `userID=${userID}&teamID=${userID}&selfHappiness=${selfHappiness}&teamHappiness=${teamHappiness}`;
        
        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/api/happiness');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success
                
                // set a message
                localStorage.setItem('successMessage', xhr.response.message);
                
                // make a redirect
                //this.context.router.replace('/login');
            } else {
                // failure
                
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;
            }
        });
        xhr.send(formData);
        
        this.props.onFormSubmit();
        this.setState({ term: '', image: null, team_image: null  });
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit} className="input-group">
            <p><b>Please select the image to indicate your happiness?</b></p>
            <div>
            <ImagePicker 
            images={imageList.map((image, i) => ({src: image, value: i}))}
            onPick={this.onPick}
            />
            <div>                
            <br/>
            </div>
            </div>
            <br/>
            <p><b>Please select the image to indicate your Team happiness?</b></p>
            <div>
            <ImagePicker 
            images={imageList.map((image, i) => ({src: image, value: i}))}
            onPick={this.onPickTeamImage}
            />
            
            <div>                
            <br/>
            </div>
            </div>
            <br/>
            
            <div className="input-group-btn">
            <RaisedButton label="Submit" type="submit" primary={true} />
            </div>
            </form>
            <br/>
            </div>
        );
    }
}
