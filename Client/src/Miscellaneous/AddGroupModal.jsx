import React, { useState } from 'react'
import { chatState } from '../Context/chatContext';

function AddGroupModal({closeFunc}) {

    const [groupChatName, setGroupChatName] = useState() ;
    const [selectedUser, setSelectedUser] = useState([]) ;
    const [search, setSearch] = useState("") ;
    const [searchResult, setSearchResult] = useState([]) ;
    const [loading, setLoading] = useState(false) ;

    const {user, chats, setChats} = chatState() ;

  return (
    <>
      
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

            <div className="bg-white flex flex-col items-center p-6 rounded-lg shadow-lg w-96">

                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-xl font-bold">name</h2>
                </div>

                <div>
                    <img className="w-64 h-64 rounded-full mr-2 p-1" src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"  alt="Rounded avatar"/>
                </div>

                <div className="mt-4 mb-4">
                    email
                </div>

                <div>
                    <button onClick={closeFunc} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Close</button>
                </div>

            </div>

        </div>

    </>
  )
}

export default AddGroupModal
