import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactListComponent from "./components/ContactList/ContactListComponent";
import ConversationComponent from "./components/Conversation/ConversationComponent";
import React, { useState } from "react";

function App() {
  const [selectedChat, setSelectedChat] = useState();
  return (
    <div className="Container">
      <ContactListComponent setChat={setSelectedChat}/>
      {selectedChat ? (
        <ConversationComponent selectedChat={selectedChat}/>
      ) : (
        <div className="Placeholder">
          <img className="ChatPlaceholder" src="https://insuranceworld.gr/wp-content/uploads/2021/01/FsWUqRoOsPu.png" alt="whatsapp"/>
          <span className="spanspan">whatsapp</span>
        </div>
      )}
    </div>
  );
}

export default App;
