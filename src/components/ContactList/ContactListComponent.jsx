import React, { useEffect, useState } from "react";
import './ContactListComponent.css'
import { contactList } from "../../mockData"






const ContactComponent = (props) => {
    const { userData, setChat } = props;
    return <div className="ContactItem" onClick={() => setChat(userData)}>
        <img className="ProfileIcon" src="https://media.istockphoto.com/vectors/user-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM=" alt="profileicon" />
        <div className="ContactInfo">
            <span className="ContactName">{userData.username}</span>
            <span className="MessageText">{userData?.lastText}</span>
        </div>
        <span className="MessageTime">13:27</span>
    </div>
}



const ContactListComponent = (props) => {

    const [users, setUsers] = useState([])
    useEffect(() => {

        fetchUsers()

    }, [])
    const fetchUsers = async () => {
        try {
            const response =
                await fetch("http://localhost:3009/users", {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJhZWQ5YjE4MWZmNjRlZjhmM2QwMWUiLCJpYXQiOjE2NjM3NTc3NDcsImV4cCI6MTY2Mzc3MjE0N30.CuO9D0Oq_t1DGtk9NRkVhioXhGLwPURVE5RREDBqcbo'
                    }
                })
            if (response.ok) {
                const usersList = await response.json()
                setUsers(usersList)
                console.log(usersList)
            } else {
                console.log('Error in fetching')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return <div className="Container2">
        <div className="ProfileInfoDiv">
            <img className="ProfileImage" src="https://media.istockphoto.com/vectors/user-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM=" alt="profileImage" />
        </div>
        <div className="SearchBox">
            <div className="SearchContainer">
                <img className="SearchIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="searchicon" />
                <input className="SearchInput" type="text" placeholder="Search" />
            </div>
        </div>
        {users.map((userData) => (
            <ContactComponent userData={userData} setChat={props.setChat} />
        ))}


    </div>
}

export default ContactListComponent

