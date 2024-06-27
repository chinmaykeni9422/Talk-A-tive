import React, { useEffect, useState } from "react";
import { chatState } from "../Context/chatContext";
import axios from "axios";

const MyChats = () => {

    const [loggedUser, setLoggedUser] = useState() ;
    const {selectedChat, setSelectedChat, user, chats, setChats} = chatState() ;

    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }

            const {data} = await axios.get("/api/v1/chats/", config)
            setChats(data) ;
        } catch (error) {
            alert("Failed to Load the chats")
        }
    } ;

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo"))) ;
        fetchChats() ;
    }, [])

    return(
        <>
        <div>MyChats</div>
        </>
    )
}

export default MyChats ;