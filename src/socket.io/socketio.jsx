import react, {useState, useRef, useEffect} from 'react';
import form from './components/UsernameForm';
import Chat from './components/Chat';
import io from "socket.io-client";
import immer from 'immer'
 
const initialMessageState = {
    general:[],
    random: [],
    jokes:[],
    javascript:[]
};


function TalkChat(){
    const [username, setUsername] = useState("");
    const [connected, seConnected] = useState(false);
    const [currentChat, setCurrentChat] =useState({isChannel: true, chatName: "general", recieverId: ""});
    const [connectedRooms, setConnectedRooms] = useState(["general"]);
    const [allUsers, setAllUsers] = useState([]);
    const [messages, setMessages] = useState(initialMessagesState);
    const [message, setMessage] = useState("")
    const socketRef = useRef();

function handleMessageChange(e){
    setMessage(e.target.value);
};

useEffect(()=>{
    setMessage("");
},[messages])

function sendMessage(){
const payload = {
    content: message,
    to: currentChat.isChannel ? currentChat.chatName : currentChat.receiverId,
    sender: username,
    chatName: currentChat.chatName,
    isChannel: currentChat.isChannel
};
socketRef.current.emit("send message", payload);
const newMessages = immer(messages, draft =>{
    draft[currentChat.chatName].push({
        sender: username,
        content: message
    });
});
setMessages(newMessages)
};



function roomJoinCallback(incomminMessages, room) {
    const newMessages = immer(messages, draft =>{
        draft[room] = incomminMessages;
    });
    setMessages(newMessages); 
}

function toggleChat(currentChat){
    if(!messages[currentChat.chatName]){
        const newMessages = immer(messages, draft =>{
            draft[currentChat.chatName] = [];
        });
        setMessages(newMessages); 
    }
    setCurrentChat(currentChat);
}



function joinRoom(room){
    const newConnectedRooms = immer(connectedRooms, draft =>{
        draft.push(room);
    });
    socketRef.current.emit("join room", room, (messages) => roomJoinCallback(messages,room));
    setConnectedRooms(newConnectedRooms);
}
function handleChange(e){
    setUsername(e.target.value);
};

function connect() {
    setConnectedRooms(true);
    socketRef.current = io.connect("/");
    socketRef.current.emit("join room", "general", (messages) => roomJoinCallback(messages,"general"))
    socketRef.current.on("new user", allUsers=>{
        setAllUsers(allUsers);
    });
    socketRef.current.on("new message", ({content, sender, chatName})=>{
        setMessages(messages => {
            const newMessages = immer(messages, draft =>{
                if(draft[chatName]){
                draft[chatName].push({content, sender});
            }
            else{
            draft[ChatName]=[{content, sender}];
        }
            });
            return newMessages
        })
    })
}

let body;
if(connected){
body=(<Chat
message = {message}
handleMessageChange = {handleMessageChange}
sendMessage = {sendMessage}
youId = {socketRef.current ? socketRef.currentid : ""}
allUsers = {allUsers}
joinRoom= {joinRoom}
connectedRooms = {connectedRooms}
currentChat = {currentChat}
toggleChat={toggleChat}
messages={messages[currentChat.chatName]}
/>);
}else{
body = (
 <Form username={username} onChange={handleChange} connect={connet}/>
);
}

    return(
         
        <div>

            {body}

        </div>

    )
}