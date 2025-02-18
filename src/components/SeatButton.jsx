const SeatButton = ({booked, index}) => {
  return (
    booked ? (
      <div class="flex w-8 h-8 rounded-md bg-navy-500 text-white justify-center items-center">{index}</div>
    ) : (
      <div class="flex w-8 h-8 rounded-md bg-orange-500 text-white justify-center items-center">{index}</div>
    )
  );
};

export default SeatButton;
