import React from 'react';
import AddNote from './addnote';



class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state')) || { value: "", isTextDisplayed: false, notes: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isTextDisplayed: true });
    this.setState(
      { notes: [this.state.value, ...this.state.notes,] },
      this.setState({ value: "" })

    );
  }

  handleDeleteNote = (index) => { // arrow prevents the need to bind
    this.setState((state) => ({
      notes: state.notes.filter((_, itemIndex) => index !== itemIndex)
    }));
  }



  render() {
    return (
      <React.Fragment>
        <div className="title" >
          <h1>NOTES</h1>
          <span className="LineTitle"></span>
        </div>


        <form id="form" onSubmit={this.handleSubmit}>
          <textarea
            className="textNote"
            id="textZone"
            value={this.state.value}
            onChange={this.handleChange}
            required
          ></textarea>

          <button type="submit" className="addBtn">
            Sauvegarder
          </button>
        </form>

        <div className="containerNote">
          {this.state.notes.map((note, noteIndex) => (
            <AddNote
              key={noteIndex}
              text={note}
              isTextDisplayed={this.state.isTextDisplayed}
              noteIndex={noteIndex}
              handleDeleteNote={this.handleDeleteNote}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}


export default Note;