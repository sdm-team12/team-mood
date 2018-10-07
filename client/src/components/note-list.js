import React, { Component } from 'react';

import { Card, CardText } from 'material-ui/Card';


export default class NoteList extends Component {
    constructor(props) {
        super(props);

        this.state = { message: ''  };

        this.renderMessage = this.renderMessage.bind(this);
    }

    renderMessage() {
        if (this.props.message == 'Thank') {
            return (
                <div>
                   
                        </div>
                
            );
        }
        
        if (this.props.message) {

            return (
                
                <div>
                    {/* {console.log(this.props.message)} */}
                    <Card className="container" style={{
                        width: '70%' }}> <CardText style={{ fontSize: '16px', color: 'green' }}>{this.state.message}</CardText> </Card>
                        </div>
                    
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderMessage()}
            </div>
        );
    }
}
