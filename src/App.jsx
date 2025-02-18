import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import { useNavigate } from 'react-router-dom';

function App() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const navigate = useNavigate(); // navigate를 사용하여 URL을 변경할 수 있습니다.

const handleClickTicket = () => {
  setClicked(!clicked);
  navigate('/seats'); // 클릭 시 /ticket 페이지로 이동};
}

const handleClickChatbot = () => {
  setClicked2(!clicked2);
  navigate('/chatbot'); // 클릭 시 /ticket 페이지로 이동};
}
  return (
    <>
    <div class="flex justify-center items-center h-screen">
      <div class="flex flex-col items-center gap-4">
      <Button text="직접 예매하기" clicked={handleClickTicket}/>
      <Button text="예매 챗봇 이용하기" clicked={handleClickChatbot}/>
      </div>
    </div>
    </>
  )
}

export default App