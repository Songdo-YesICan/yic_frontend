import React from 'react';

const Button = ({ text, clicked }) => {
  return (
    <button class="bg-orange-600 active:bg-red-400 text-white p-4 rounded-md" onClick={clicked}>
      {text}
    </button>
  );
} ;
export default Button;