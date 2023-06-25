import React from "react";
import { LiaSmileSolid } from "react-icons/lia";
import { VscSend } from "react-icons/vsc";

import { useState } from "react";
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const Input = ({ newMessage }) => {
  const [input, setInput] = useState("");

  const genrateRandomColor = () => {
    const red = Math.floor(Math.random() * 201);
    const green = Math.floor(Math.random() * 201);
    const blue = Math.floor(Math.random() * 201);

    const lightRed = red + 55;
    const lightGreen = green + 55;
    const lightBlue = blue + 55;

    const hexColor = rgbToHex(lightRed, lightGreen, lightBlue);

    return hexColor;
  };

  function rgbToHex(red, green, blue) {
    const hexRed = red.toString(16).padStart(2, "0");
    const hexGreen = green.toString(16).padStart(2, "0");
    const hexBlue = blue.toString(16).padStart(2, "0");

    return `#${hexRed}${hexGreen}${hexBlue}`;
  }
  function formatDateToHHMM(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const handleChange = async (e) => {
    setInput(e.target.value);
  };

  const clickHandler = async () => {
    setInput("");
    const randomIndex = Math.floor(Math.random() * 5);

    let obj = {
      time: formatDateToHHMM(new Date()),
      text: input,
      user: user_list[randomIndex],
      initials: user_list[randomIndex][0],
      color: genrateRandomColor(),
    };
    newMessage(obj);
  };

  return (
    <div className="searchbar position-relative">
      <input
        value={input}
        onChange={handleChange}
        type="text"
        className="typingmsg ms-3 p-2 "
        placeholder="Type a message..."
      />
      <span value={input} onClick={clickHandler} className="send">
        <VscSend />
      </span>
      <span className="emoji">
        <LiaSmileSolid />
      </span>
    </div>
  );
};

export default Input;
