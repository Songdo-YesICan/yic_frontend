import {
  PaperClipIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import React, {useState} from "react";

const InputChat = ({handleSend}) => {
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    console.log(e.target.value); // e.target.value로 입력값을 출력합니다.
    setMessage(e.target.value); // 입력값을 상태로 업데이트합니다.
  };

  const handleSubmit = (e) => {
    console.log(e.target.value);
    handleSend(message);
    setMessage("");
  };

  return (
    <div className="flex w-full items-center gap-2 rounded-md p-4 bg-white">
      <input
        className="w-full"
        type="text"
        value={message}
        placeholder="1번으로 2명 예매해줘 "
        onChange={handleMessage} // 이벤트 객체를 그대로 넘깁니다.
      />
      <div className="flex flex-row gap-2">
        <FaceSmileIcon class="w-6 h-6" />
        <PaperClipIcon class="w-6 h-6" />
        <PaperAirplaneIcon class="w-6 h-6" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default InputChat;
