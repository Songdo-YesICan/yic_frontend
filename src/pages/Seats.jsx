import React, { useState } from 'react';
import SubHeader from '../components/SubHeader';
import SeatButton from '../components/SeatButton';

const Seats = () => {
  
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]); // 예약된 좌석 관리

  // 좌석 클릭 시 예약 또는 취소 처리
  const handleSeatClick = (seatIndex) => {
    if (bookedSeats.includes(seatIndex)) {
      // 이미 예약된 좌석 클릭 시 예약 취소
      setBookedSeats(bookedSeats.filter((seat) => seat !== seatIndex));
    } else {
      // 예약되지 않은 좌석 클릭 시 예약
      setBookedSeats([...bookedSeats, seatIndex]);
    }
  };

  return (
    <div>
      <SubHeader title="CGV 송도점" subtitle="캡틴 아메리카 : 브레이브 뉴 월드" />
      <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-4 gap-2 mt-6 bg-gray-200 p-4 w-1/2 h-1/2 justify-center rounded-lg">
        {Array.from({ length: 16 }, (_, i) => (
          <SeatButton
            key={i + 1}
            booked={bookedSeats.includes(i + 1)}
            index={i + 1}
            onClick={() => handleSeatClick(i + 1)}
          />
        ))}
      </div>
        </div>
    </div>
  );
};

export default Seats;
