import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactListComponent from "./components/ContactList/ContactListComponent";
import ConversationComponent from "./components/Conversation/ConversationComponent";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  const [selectedChat, setSelectedChat] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>}/>
        <Route path="/homepage" element={<div className="Container">
          <ContactListComponent setChat={setSelectedChat} />
          {selectedChat ? (
            <ConversationComponent selectedChat={selectedChat} />
          ) : (
            <div className="Placeholder">
              <img
                className="ChatPlaceholder"
                src="https://insuranceworld.gr/wp-content/uploads/2021/01/FsWUqRoOsPu.png"
                alt="whatsapp"
              />
              <span className="spanspan">whatsapp</span>
            </div>
          )}
        </div>}/>

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
