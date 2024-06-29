import React, { useEffect, useState } from "react";
import { chatState } from "../Context/chatContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import ChatLoading from "./ChatLoading";

const MyChats = () => {

    const [loggedUser, setLoggedUser] = useState();
    const { selectedChat, setSelectedChat, user, chats, setChats } = chatState();

    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }

            const { data } = await axios.get("/api/v1/chats/", config)
            setChats(data);
        } catch (error) {
            alert("Failed to Load the chats")
        }
    };

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChats();
    }, [])

    return (
        <>
            <div className="bg-blue-100 border-2 rounded-lg h-[838px]">

                <div className="pb-3 text-4xl px-3 pt-3 font-sans flex w-[100%] justify-between items-center">
                    My Chats 

                    <button className=" bg-blue-400 text-2xl hover:bg-blue-300 p-2">
                        New Group Chat <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                
                {/* <div className="flex flex-col p-3 bg-#F8F8F8 w-[100%] h-[100%] rounded-lg overflow-hidden">
                    {
                        chats? (

                        ) : (
                            <ChatLoading />
                        )
                    }
                </div> */}

            </div>
        </>
    )
}

export default MyChats;