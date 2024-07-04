import React, { useState } from 'react'
import { chatState } from '../Context/chatContext';
import axios from "axios" ;
import UserListItem from "./UserListItem"
import UserBadgeItem from "./UserBadgeItem "

function AddGroupModal({ closeFunc }) {

    const [groupChatName, setGroupChatName] = useState("") ;
    const [selectedUser, setSelectedUser] = useState([]) ;
    const [search, setSearch] = useState("") ;
    const [searchResult, setSearchResult] = useState([]) ;
    const [loading, setLoading] = useState(false) ;

    const { user, chats, setChats } = chatState() ;

    //function
    const handleSearch = async (query) => {
        setSearch(query) ;

        if(!query){
            return ;
        }

        try {
            setLoading(true) ;

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            } ;

            const {data} = await axios.get(`/api/v1/users?search=${search}`, config) ;

            setLoading(false) ;

            setSearchResult(data) ;
        } catch (error) {
            alert("Failed to load the search result") ;
        }
    }

    const handleSubmit = () => {

    }

    const handleGroup = (user) => {
        if (selectedUser.includes(user)){
            alert("User already added")
            return;
        }

        setSelectedUser([...selectedUser, user]);
    };

    const handleDelete = () => {

    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 " >
                <div className="bg-white fixed top-[30%] left-[43%] flex flex-col items-center p-6 rounded-lg shadow-lg w-96">
                    <div className="flex justify-between items-center border-b pb-2 w-full">
                        <h2 className="text-xl font-bold">Create Group Chat</h2>
                    </div>

                    <div className="w-full mt-4 mb-4">
                        <input
                            type="text"
                            value={groupChatName}
                            onChange={(e) => setGroupChatName(e.target.value)}
                            placeholder="Group Chat Name"
                            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Add Users e.g. John, Jane"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {
                        selectedUser.map((u) => (
                            <UserBadgeItem 
                                key={user._id}
                                user={u}
                                handleFunction={() => handleDelete(u)}
                            />
                        ))
                    }

                    {loading ? <div>Loading..</div> :(
                        searchResult?.slice(0, 4).map(user => (
                            <div className='w-full'>
                                <UserListItem
                                    key={user._id}
                                    user={user}
                                    handleFunction={() => handleGroup(user)}
                                />
                            </div>
                        ))
                    )}

                    <div className="flex justify-end w-full mt-4">
                        <button onClick={closeFunc} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Close</button>
                        <button onClick={handleSubmit} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">Create Chat</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddGroupModal;
