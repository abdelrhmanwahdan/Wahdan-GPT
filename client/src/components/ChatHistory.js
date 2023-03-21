import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsRobot, BsPersonCircle } from "react-icons/bs";

function ChatHistory({ chat }) {
  const targetRef = useRef(null);

  useEffect(() => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  let createListItem = (x, key) => {
    if (x.sender === "Wahdan")
      return (
        <li className="list-group-item">
          <BsRobot />
          <p style={{ width: "100%", height: "auto", maxwidth: "100%" }}>
            {x.content}
          </p>
        </li>
      );
    else
      return (
        <li className="list-group-item">
          <BsPersonCircle />
          <p style={{ width: "100%", height: "auto", maxwidth: "100%" }}>
            {x.content}
          </p>
        </li>
      );
  };
  return (
    <ul
      className="chat-list list-group list-group-flush container "
      style={{
        margin: "auto",
        width: "80%",
        textalign: "left",
        maxHeight: "450px",
        height: "450px",
        overflowY: "auto",
        backgroundColor: "#F8F8F8",
      }}
    >
      <dev>{chat.length > 0 && chat.map(createListItem)}</dev>
      <dev ref={targetRef}></dev>
    </ul>
  );
}

export default ChatHistory;
