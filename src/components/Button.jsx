import React from 'react';

const Button = ({ text, clicked }) => {
  return (
    <button class="bg-orange-600 w-60 active:bg-red-400 hover:bg-orange-700 text-white p-4 rounded-md" onClick={clicked}>
      {text}
    </button>
  );
} ;
export default Button;