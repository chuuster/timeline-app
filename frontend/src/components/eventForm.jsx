import React, { Component } from 'react';

export default class EventForm extends Component {
  render() {
    return (
      <div id="modal">
        <form>
          <div id="x-close-form-container">
            <div id="x-close-form" onClick={this.props.closeForm}>x</div>
          </div>
          <h1>Add Calendar Event</h1>
          <label>
            <span>Event Type</span>
            <select>
              <option disabled selected value> -- Select an Option -- </option>
              <option>Case Manager Appointment</option>
              <option>Court Date</option>
            </select>
          </label>
          <label>
            <span>Date</span>
            <input type="datetime-local"></input>
          </label>
          <label>
            <span>Attended? (if applicable)</span>
            <select>
              <option disabled selected value> -- Select Yes or No -- </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <div id="submit-button-container">
            <button id="submit-button" onClick={this.props.closeForm}>Submit</button>
          </div>
        </form>
      </div>
    ); 
  }
}