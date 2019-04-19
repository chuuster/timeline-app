import React, { Component } from 'react';
import moment from 'moment';

export default class EventListing extends Component {
  constructor(props) {
    super(props); 
    this.conditionalRenders = {
      "court-date": { icon: "far fa-calendar", subject: "Court Date" },
      "reminder": { icon: "far fa-bell", subject: "Reminder for Court Date" },
      "data-update": { icon: "fas fa-edit", subject: "Client Data Updated" },
      "cm-appt": { icon: "far fa-calendar", subject: "Case Manager Appointment" },
      "attended": { icon: "fas fa-check" },
      "unattended": { icon: "fas fa-times" },
    };
  }

  render() {
    const date = moment(this.props.listing.date);
    const dateDisplay = date.format('MMMM Do YYYY h:mm a');
    const type = this.props.listing.type;
    let attendStatus; 
    let body;

    this.props.listing.attended ? attendStatus = "attended" : attendStatus = "unattended";
    
    if (type === 'reminder') {
      body = `Hello John, reminder that you have court ${date.add(1, 'days').calendar()}. If you need assistance with transportation please contact your case manager at 555-555-5555.`; 
    }

    console.log(body);
    return (
      <li>
        <div className="date-container">
          {dateDisplay}
        </div>

        <div className="icon-container">
          <i className={this.conditionalRenders[type].icon}></i>
        </div>

        <div className={`${attendStatus}-container`}>
            {new Date(this.props.listing.date) < new Date() &&
            (type === "cm-appt" || type==="court-date") &&
              <i className={this.conditionalRenders[attendStatus].icon}></i>          
            }
        </div>
        
        <div className="content-container">
          {this.conditionalRenders[type].subject}
          {body && 
            <div className="body-container">
              {body}
            </div>
          }
        </div>
        
      </li>
    ); 
  }
}