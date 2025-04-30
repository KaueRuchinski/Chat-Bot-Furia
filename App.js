import React from "react";
import ChatBox from "./ChatBox";
import "./App.css";

function App() {
  return(
    <div className="container">
      <h1>Chat FURIA 💬🔥</h1>
      <p>Bem-vindo ao chat oficial dos fãs da FURIA!</p>
      <ChatBox />
    </div>
  );
}

export default App;