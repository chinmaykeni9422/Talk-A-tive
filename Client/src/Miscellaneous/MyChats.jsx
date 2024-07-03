import React, { useEffect, useState } from "react";
import { chatState } from "../Context/chatContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ChatLoading from "./ChatLoading";
import { getSender } from "../config/ChatLogics";
import AddGroupModal from "./AddGroupModal" ;

const MyChats = () => {
    const [loggedUser, setLoggedUser] = useState(null); // Initialize as null
    const { selectedChat, setSelectedChat, user, chats, setChats } = chatState();

    //add group modal
    const [addGroupModal, setAddGroupMoadl] = useState(false) ;
    const openGroupAddModal = () => setAddGroupMoadl(true) ;
    const closeGroupAddModal = () => setAddGroupMoadl(false) ;

    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user?.token}`, // Safe navigation operator
                },
            };

            const { data } = await axios.get("/api/v1/chats/", config);
            setChats(data);
        } catch (error) {
            alert("Failed to Load the chats");
        }
    };

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo) {
            setLoggedUser(userInfo);
            fetchChats();
        }
    }, []);

    if (!user) return <ChatLoading />; // Show loading if user is not defined yet

    return (
        <>

            {
                addGroupModal && (
                    <AddGroupModal
                        closeFunc={closeGroupAddModal}
                    />
                )
            }

            <div className="bg-blue-100 border-2 rounded-lg h-[838px]">
                <div className="pb-3 text-4xl px-3 pt-3 font-sans flex w-[100%] justify-between items-center">
                    My Chats
                    <button onClick={openGroupAddModal} className=" bg-blue-400 text-2xl hover:bg-blue-300 p-2">
                        New Group Chat <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <div className="p-3 h-[760px] overflow-x-auto scrollbar-hide">
                    {chats ? (
                        chats.map((chat) => (
                            <div
                                className={`${
                                    selectedChat === chat ? "bg-green-300" : "bg-gray-600"
                                } ${
                                    selectedChat === chat ? "text-white" : "text-black"
                                } px-3 py-2 bg-gray-600 cursor-pointer overflow-y-auto rounded-lg mb-2`}
                                onClick={() => setSelectedChat(chat)}
                                key={chat._id}
                            >
                                <p>
                                    {!chat.isGroupChat
                                        ? getSender(loggedUser, chat.users)
                                        : chat.chatName}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">
                            Select a chat...
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default MyChats;
