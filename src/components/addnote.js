import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import Note from './note';


class AddNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentDate: new Date().toLocaleDateString() };
    }


    render() {
        return (
            <React.Fragment>
                    <h3 className="NoteDetails">
                        {this.state.currentDate}</h3>
                    <span className="NoteLine"></span>
                    <div className="notes">
                        <p>{this.props.isTextDisplayed && this.props.text}</p>
                    </div>
                    <button
                        type="reset"
                        className="deleteBtn"
                        onClick={() => this.props.handleDeleteNote(this.props.noteIndex)}>
                    </button>

            </React.Fragment>
        );
    }
}

export default AddNote;