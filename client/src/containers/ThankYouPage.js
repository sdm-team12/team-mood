import React from 'react';
import Auth from '../modules/Auth';
import NoteList from '../components/note-list';

class ThankYouPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            errors: {},
        };
    }

    

    render() {
        return (
            <NoteList 
            errors={this.state.errors}
            message={this.state.message} />
        );
    }
}

export default ThankYouPage;