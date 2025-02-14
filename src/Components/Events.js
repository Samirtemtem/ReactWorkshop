import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import Event from './Event';
import events from '../events.json';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      showWelcome: false,
      showBookingAlert: false,
      bookingMessage: ''
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    setTimeout(() => {
      this.setState({ showWelcome: true });
      setTimeout(() => {
        this.setState({ showWelcome: false });
      }, 3000);
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  buy = (eventName) => {
    const updatedEvents = this.state.events.map(event => {
      if (event.name === eventName && event.nbTickets > 0) {
        return {
          ...event,
          nbTickets: event.nbTickets - 1,
          nbParticipants: event.nbParticipants + 1
        };
      }
      return event;
    });

    this.setState({ 
      events: updatedEvents,
      showBookingAlert: true,
      bookingMessage: 'You have booked an event'
    });

    setTimeout(() => {
      this.setState({ showBookingAlert: false });
    }, 2000);
  }

  handleLike = (eventName) => {
    const updatedEvents = this.state.events.map(event => {
      if (event.name === eventName) {
        return { ...event, like: !event.like };
      }
      return event;
    });
    this.setState({ events: updatedEvents });
  }

  render() {
    return (
      <div className="container mt-4">
        {this.state.showWelcome && (
          <Alert variant="success">
            Hey welcome to Esprit Events
          </Alert>
        )}

        {this.state.showBookingAlert && (
          <Alert variant="info">
            {this.state.bookingMessage}
          </Alert>
        )}

        <Row>
          {this.state.events.map((event, index) => (
            <Col key={index} md={4} className="mb-3">
              <Event 
                event={event}
                buyFunction={this.buy}
                onLike={this.handleLike}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Events;
