import React from 'react';
const Chat = ({me, text, timestamp}) => {
  return (
    <div class="flex flex-col gap-2 items-end">
      <p class="inline-flex p-4 gap-2 justify-center items-center text-white bg-orange-500 rounded-md border-1 border-gray-200 rounded-md">{text}</p>
      <p class="text-sm text-gray-200">{timestamp}</p>
    </div>
  );
};

export default Chat;