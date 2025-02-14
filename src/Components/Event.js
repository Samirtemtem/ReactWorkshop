import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { saveEventState } from '../services/eventService';

function Event({ event, buyFunction, onLike }) {
  const isSoldOut = event.nbTickets === 0;

  const handleBuy = async () => {
    await saveEventState(event.name, {
      booked: true,
      nbTickets: event.nbTickets - 1,
      nbParticipants: event.nbParticipants + 1
    });
    buyFunction(event.name);
  };

  const handleLike = async () => {
    await saveEventState(event.name, {
      like: !event.like
    });
    onLike(event.name);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={event.Img} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          Price: {event.price}<br />
          Number of tickets: {event.nbTickets}<br />
          Number of participants: {event.nbParticipants}
        </Card.Text>
        <Button 
          variant="primary" 
          onClick={handleBuy}
          disabled={isSoldOut}
        >
          {isSoldOut ? "Sold Out" : "Book an event"}
        </Button>
        <Button 
          variant={event.like ? "danger" : "success"}
          onClick={handleLike}
          className="ms-2"
        >
          {event.like ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Event;
