import React, { Component } from 'react';
import moment from 'moment';

export default class EventListing extends Component {
  icon = {
    "court-date": "far fa-calendar",
    "reminder": "far fa-bell",
    "cm-appt": "far fa-calendar",
    "data-update": "fas fa-edit",
  }

  render() {
    const dateDisplay = moment(this.props.listing.date).format('MMMM Do YYYY h:mm a') 

    return (
      <li>
        <div className="date-container">
          {dateDisplay}
        </div>

        <div className="icon-container">
          <i className={this.icon[this.props.listing.type]}></i>
        </div>
        
        <div className="content-container">
          {this.props.listing.subject}
          { this.props.listing.body && 
            <div className="body-container">
              {this.props.listing.body}
            </div>
          }
        </div>
        
      </li>
    ); 
  }
}