import React, { Component } from 'react';
import moment from 'moment';

export default class EventListing extends Component {
  icon = {
    "court-date": "far fa-calendar",
    "reminder": "far fa-bell",
    "cm-appt": "far fa-calendar",
    "data-update": "fas fa-edit",
    "attended": "fas fa-check"
  }

  render() {
    const dateDisplay = moment(this.props.listing.date).format('MMMM Do YYYY h:mm a') 
    const attended = (this.props.listing.attended) ? "attended" : "unattended"

    return (
      <li>
        <div className="date-container">
          {dateDisplay}
        </div>

        <div className="icon-container">
          <i className={this.icon[this.props.listing.type]}></i>
        </div>

        <div className="attended-container">
          { this.props.listing.attended && 
            <i className={this.icon[attended]}></i>
          }
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