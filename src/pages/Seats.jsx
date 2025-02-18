import React from 'react';

const Seats = () => {
  return (
    <div>
      <h1>Ticket Booking Page</h1>
      <p>Here you can book your tickets!</p>
      <div>
      <SeatButton booked={false} index={1} />
      <SeatButton booked={false} index={2} />
      <SeatButton booked={false} index={3} />
      <SeatButton booked={false} index={4} />
      </div>


      <div>
      <SeatButton booked={false} index={1} />
      <SeatButton booked={false} index={2} />
      <SeatButton booked={false} index={3} />
      <SeatButton booked={false} index={4} />
      </div>


      <div>
      <SeatButton booked={false} index={5} />
      <SeatButton booked={false} index={6} />
      <SeatButton booked={false} index={7} />
      <SeatButton booked={false} index={8} />
      </div>


      <div>
      <SeatButton booked={false} index={9} />
      <SeatButton booked={false} index={10} />
      <SeatButton booked={false} index={11} />
      <SeatButton booked={false} index={12} />
      </div>
    </div>
  );
};

export default Seats;