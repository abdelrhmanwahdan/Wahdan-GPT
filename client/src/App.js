import React, { useState } from "react";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [chat, setChat] = useState([]);
  let getUserResponse = (data) => {
    console.log(data);
    setChat((current) => [...current, data]);
    console.log(chat);
  };

  return (
    <>
      <Header />
      <ChatHistory chat={chat} />
      <Form getUserResponse={getUserResponse} />
    </>
  );
}

export default App;
