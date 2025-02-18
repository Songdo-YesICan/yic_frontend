import React from 'react';

const ChatR = ({image, text, timestamp}) => {
  return (
  <div class="flex flex-col gap-2 items-start ">
    <div class="flex items-center gap-2">
      <img src={image} alt="profile" class="w-10 h-10 rounded-full" />
      <p class="text-sm text-gray-900">미소지기</p>
    </div>
    <p class="inline-flex p-4 gap-2 justify-center items-center bg-white rounded-md border-1 border-gray-200 rounded-md">{text}</p>
    <p class="text-sm text-gray-200">{timestamp}</p>
  </div>)
};

export default ChatR;