import React, { Component } from 'react';
import EventListing from './components/eventListing';
import EventForm from './components/eventForm';
import './normalize.css';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.orderListings = this.orderListings.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.state = {
      data: null,
      showForm: false,
    };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.data.events }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/api/events');
    const body = await response.json();
    
    if (response.status !== 200) {
      throw Error(body.message);
    }
    
    return body;
  }

  orderListings() {
    const sortedDates = this.state.data.sort((a, b) => {
      if (new Date(b.date) < new Date(a.date)) {
        return -1;
      } else if (new Date(b.date) > new Date(a.date)) {
        return 1; 
      } else {
        return 0;
      }
    })

    return sortedDates; 
  }

  upcomingListings() {
    let listings = this.orderListings(); 
    return listings.filter(listing => new Date(listing.date) > new Date()); 
  }

  pastListings() {
    let listings = this.orderListings(); 
    return listings.filter(listing => new Date(listing.date) < new Date()); 
  }

  openForm() {
    this.setState({showForm: true});
  }

  closeForm() {
    this.setState({ showForm: false });
  }

  render() {
    return (
      <div className="app">
        {(this.state.showForm) && 
          <EventForm closeForm={this.closeForm}/>
        }

        <button id="add-event-button" onClick={this.openForm}>Add New Event</button>

        <header>
          <h2>Upcoming Events</h2>
        </header>

        <ul>
          {this.state.data && 
            this.upcomingListings().map(listing => <EventListing key={listing.id} listing={listing}/>)
          }
        </ul>

        <header>
          <h2>Past Events</h2>
        </header>

        <ul>
          {this.state.data &&
            this.pastListings().map(listing => <EventListing key={listing.id} listing={listing} />)
          }
        </ul>

      </div>
    );
  }
}

export default App;
