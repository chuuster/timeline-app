import React, { Component } from 'react';
import EventListing from './components/event';
import './normalize.css';
import './app.css';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/api/events');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    return body;
  };

  render() {
    return (
      <div className="app">
        <button>Add New Event</button>
        <h2>
          Upcoming Events
        </h2>

        <ul>
          {this.state.data && 
            this.state.data.map(listing => <EventListing key={listing.id} listing={listing}/>)
          }
        </ul>

        <h2>
          Past Events
        </h2>
        <ul>
          {this.state.data &&
            this.state.data.map(listing => <EventListing key={listing.id} listing={listing} />)
          }
        </ul>

      </div>
    );
  }
}

export default App;
