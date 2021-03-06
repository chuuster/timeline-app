import React, { Component } from 'react';

export default class EventForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      type: null, 
      date: null, 
      attended: null
    }; 
    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value}, () => {return;});
    };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.closeForm();
    
    fetch('/api/events/', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
      .then(() => this.setState({
        type: null,
        date: null,
        attended: null
      }))
      .then(() => this.props.fetchData())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="modal">
        <form onSubmit={this.submitForm}>
          <div id="x-close-form-container">
            <span id="x-close-form" onClick={this.props.closeForm}>x</span>
          </div>
          
          <h1>Add Calendar Event</h1>
          
          <label>
            <span>Event Type</span>
            <select required defaultValue="" onChange={this.handleInput("type")}>
              <option disabled value=""> -- Select an Option -- </option>
              <option value="cm-appt">Case Manager Appointment</option>
              <option value="court-date">Court Date</option>
            </select>
          </label>
          
          <label>
            <span>Date</span>
            <input required type="datetime-local" onChange={this.handleInput("date")}></input>
          </label>
          
          {(this.state.date !== null && new Date(this.state.date) < new Date()) && 
            <label>
              <span>Attended?</span>
              <select defaultValue="" onChange={this.handleInput("attended")}>
                <option disabled value=""> -- Select Yes or No -- </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          }
          
          <div id="submit-button-container">
            <input type="submit" id="submit-button"></input>
          </div>
        
        </form>
      </div>
    ); 
  }
}