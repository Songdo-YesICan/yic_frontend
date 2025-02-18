import React from 'react';
import ReturnButton from './chatbot/ReturnButton';
import { useNavigate } from 'react-router-dom';

const SubHeader = ({title, subtitle}) => {
  const navigate = useNavigate(); // navigate를 사용하여 URL을 변경할 수 있습니다.
  return (
    <div class="flex items-center justify-between h-16 backdrop-blur-[20px] bg-white border-b-2 border-gray-200">
      <ReturnButton class="flex-shrink-0"  onClick={() => navigate('/')}/>
      <div class="flex flex-col justify-center items-center mx-auto"> 
      <h1 class="text-xl font-semibold"> {title} </h1>
      <p class="text-sm text-gray-500 font-light"> {subtitle} </p>
      </div>
    </div>
  );
};

export default SubHeader;