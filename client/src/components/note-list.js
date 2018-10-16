import React, { PropTypes, Component } from 'react';

import { Card, CardText } from 'material-ui/Card';


export default class NoteList extends Component {
    constructor(props) {
        super(props);

        this.renderMessage = this.renderMessage.bind(this);
    }

    renderMessage() {

        if (this.props.message == '') {

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
                        width: '70%' }}> <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.message}</CardText> </Card>

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
NoteList.propTypes = {
    message: PropTypes.string.isRequired
  };
