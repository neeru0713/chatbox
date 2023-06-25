import React, { useState } from "react";
import Name from "./Name.js";
import { BiLike } from "react-icons/bi";

const Message = ({ time, text, user, color, initials }) => {
  const [likes, setLikes] = useState(0);

  const addLike = async () => {
    setLikes(likes + 1);
  };
  return (
    <div className="message">
      <div className="d-flex mt-2 align-items-center ">
        <Name color={color} text={initials} />
        <h5 className="name">{user}</h5>
        <span className="ms-3 fs-7 ">{time}</span>
      </div>
      <div className="message-box d-inline-block p-3">
        <p className="text d-inline">{text}</p>
      </div>
      <BiLike className="fs-4 ms-1 me-1" onClick={addLike} />
      <span>{likes}</span>
    </div>
  );
};

export default Message;
