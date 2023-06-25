import React, { useState } from "react";
import Message from "./Message.js";

const Messages = ({ data }) => {
  return (
    <div className="messages d-flex flex-column-reverse ">
      {data.map((message) => (
        <Message
          time={message.time}
          text={message.text}
          user={message.user}
          initials={message.initials}
          color={message.color}
        />
      ))}
    </div>
  );
};

export default Messages;
