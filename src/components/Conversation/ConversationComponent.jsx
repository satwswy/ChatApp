import "./ConversationComponent.css"
import { messagesList } from "../../mockData";
import Picker from "emoji-picker-react"
import { useState } from "react";





const ConversationComponent = (props) => {
    const { selectedChat } = props;
    const [text, setText] = useState("");
    const [pickerVisible, togglePicker] = useState(false);
    const [messageList, setMessageList] = useState(messagesList)
    const onEmojiClick = (event, emojiObj) => {
        setText(text + emojiObj.emoji)
        togglePicker(false)
    }

    const onEnterPress = (event) =>{
        if (event.key === "Enter"){
            const messages = [...messageList]
            messages.push(
                {
                    id: 0,
                    messageType: "TEXT",
                    text,
                    senderID: 0,
                    addedOn: "12:00 PM",
                  }
            )
            setMessageList(messages)
            setText("")
        }
    }


    return <div className="Container3">
        <div className="ProfileHeader">
            <img className="ProfileImage2" src="https://media.istockphoto.com/vectors/user-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM=" alt="profileImage" />
            {selectedChat.name}
        </div>
        <div className="MessageContainer">
            {messageList.map((messageData) =>
                <div className={messageData.senderID ===1 ? "MessageDiv" : "MessageDiv2"}>
                    <div className={messageData.senderID ===1 ? "Message" : "Message2"} >
                        {messageData.text}</div>
                </div>
            )}
        </div>
        <div className="ChatBox">
            <div className="SearchContainer2">
                {pickerVisible && (<Picker
                    pickerStyle={{ position: "absolute", bottom: "60px" }}
                    onEmojiClick={onEmojiClick} />)}
                <img className="EmojiImage" onClick={()=>togglePicker(!pickerVisible)} src="https://cdn-icons-png.flaticon.com/512/1500/1500458.png" alt="emojiimage" />
                <input className="SearchInput2"
                    type="text"
                    placeholder="Type a message"
                    value={text}
                    onKeyDown={onEnterPress}
                    onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    </div>
}

export default ConversationComponent