import React from "react";
import SubHeader from "../components/SubHeader";
import Chat from "../components/chatbot/Chat";
import ChatR from "../components/chatbot/ChatR";
import img from "../assets/image.png";
import InputChat from "../components/chatbot/InputChat";

const handleSubmit = (e) => {
  console.log(e.target.value);
};

const Chatbot = () => {
  return (
    <div class="flex flex-col h-full">
      <SubHeader
        title="cgvot"
        subtitle="예매 챗봇을 이용하여 예매 정보를 확인할 수 있습니다."
      />
      <div class="flex flex-col gap-2 p-4 bg-gray-100 flex-grow">
        <Chat text="안fdafdasdsa녕하세요" timestamp="visitor 10:02 pm" />
        <ChatR
          image={img}
          text="안fdafdasdsa녕하세요"
          timestamp="visitor 10:02 pm"
        />
      </div>
      <div class="flex flex-grow">
        <InputChat handleSend={handleSubmit} />
      </div>
    </div>
  );
};

export default Chatbot;
