import React from "react";
import { Container, Row } from "react-bootstrap";




function Chat(props){
    function renderRooms(room){
        const currentChat = {
            chatName: room,
            isChannel: true,
            receiverId: "",
        }
        return(
            <Row onClick={()=> props.toggleChat(currentChat)} key={room}>
                {room}
            </Row>
        );
    }
    function renderUser(user){
        if(user.id === props.yourId){
            return(<Row key={user.id}>
                You: {user.username}
            </Row>);
        }
        const currentChat = {
            chatName: user.username,
            isChannel: false,
            receiverId: user.id,
        }
        return(
            <Row onClick={()=>{
                props.toggleChat(currentChat);
            }}key={user.id}>
                {user.username}
            </Row>
        );
    };


    function renderMessages(message, index){
        return(
            <div key={index}>
                <h3>{message.sender}</h3>
                <p>{message.content}</p>
            </div>
        )
    }

    let body
if (!props.currentChat.isChannel || props.connectedRooms.includes(props.currentChat.chatName)) {
    body = (
        <Messages>
            {props.messages.map(renderMessages)}
        </Messages>
    );
}else{
    body = (
        <button onClick={() => props.joinRoom(props.currentChat.chatName)}>Join{props.currentChat.chatName}</button>
     );
}

function handleKeyPress(e){
    if(e.key ==="Enter"){
        props.sendMessage();
    }
}

    return(
        <Container>
            <SideBar>
                <h3>Channels</h3>
                {roojms.map(renderRooms)}
                <h3>All Users</h3>
                {props.allUsers.map(renderUser)}
            </SideBar>
            <ChatPannel>
                <channelInfo>
                    {props.currentChat.chatname}
                </channelInfo>
                <BodyContainer>
                    {body}
                </BodyContainer>
                <TextBox
                value = {props.message}
                onChange={props.handleMessageChange}
                onKeyPress={handleKeyPress}
                placeholder="say Something"
                />
            </ChatPannel>
        </Container>
    )
}

export default Chat