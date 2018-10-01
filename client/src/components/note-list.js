import React, { Component } from 'react';

import { Card, CardTitle, CardText, CardActions, CardHeader } from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator';



const spinnerStyle = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

export default class NoteList extends Component {
    constructor(props) {
        super(props);

        this.state = { notes: '' };

        this.renderNotes = this.renderNotes.bind(this);
    }

    renderNotes() {
        if (this.props.notes.length == 0) {
            return (
                <Card className="container" style={{
                    width: '70%' }}>
                        <CardHeader
                            title=""
                            />
                    </Card>
            );
        }
        
        if (this.props.notes) {
            // return this.props.notes.map((note) => {
            //     return (
            //         <Card className="container" key={note._id}>
            //             <CardHeader
            //                 title={note.note}
            //                 />
            //         </Card>
            //     );
            // })
            return (
                <Card className="container" style={{
                    width: '70%' }}>
                        <CardHeader
                            title="Thank You For Filling Survey"
                            />
                    </Card>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderNotes()}
            </div>
        );
    }
}
