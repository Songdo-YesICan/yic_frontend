rsc

const SeatButton = ({booked, index}) => {
  return (
    booked ? (
      <div class="rounded-md bg-gray-300">{index}</div>
    ) : (
      <div class="rounded-md bg-orange-400">{index}</div>
    )
  );
};
