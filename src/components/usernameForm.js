import React from "react";

function Form(props){
    return(
        <form>
            <input
            placeholder = "username..."
            type = "text"
            value = {props.username}
            onChange={props.connect}
            />
            <button onClick={props.connect}>connect</button>
            </form>
    )
}

export default Form