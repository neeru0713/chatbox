import React, { useState } from "react";
import Input from "./Input.js";
import Messages from "./Messages.js";

const Chat = () => {
  const [data, setData] = useState([]);

  function newMessage(newMessage) {
    setData([newMessage, ...data]);
  }

  return (
    <div className="chat h-100 d-flex flex-column">
      <div className="introduction mt-2 ms-4">
        <h5>Introductions</h5>
        <p>This Channel Is For Company Wide Chatter</p>
      </div>
      <hr className="" />
      <Messages className="flex-grow-0 overflow-y-auto" data={data} />

      <Input newMessage={newMessage} />
    </div>
  );
};

export default Chat;
