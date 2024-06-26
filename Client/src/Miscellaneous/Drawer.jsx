import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import ChatLoading from './ChatLoading';
import UserListItem from './UserListItem';

const Drawer = ({
    isOpenDrawer, 
    toggle, 
    search, 
    setSearch,
    handleSearch,
    loading,
    searchResult,
    accesChat
    }) => {

    return(
        <>
            <div>
                <div
                    className={`fixed z-40 top-0 left-0 h-full w-72 bg-gray-800 text-white transition-transform transform ${
                    isOpenDrawer ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >

                    <div className="p-2">

                        <button className='fixed left-64 text-2xl ' onClick={toggle}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>

                        <h2 className="text-xl font-bold">Search Users</h2>

                    </div>

                    <div className="flex p-2">
                            <input 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                className="border text-black border-gray-600 rounded-md p-2" type="text" name="" id="" 
                            />

                            <button 
                                className='bg-gray-800 ml-3 text-white border border-gray-600 rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-white'
                                onClick={handleSearch}
                            >
                                Go
                            </button>
                    </div>

                    {
                        loading ? (
                            <ChatLoading/>
                        ) : (
                            searchResult?.map( user => (
                                <UserListItem 
                                    key={user._id}
                                    user={user}
                                    handleFunction={() => accesChat(user._id)}
                                />
                            ))
                        )
                    }

                </div>

                {isOpenDrawer && (
                    <div
                    className="fixed z-30 inset-0 text-white bg-black opacity-50"
                    >
                    </div>
                )}

            </div>
        </>
    ) ;
} ;

export default Drawer ;