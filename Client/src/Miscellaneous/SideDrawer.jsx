import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faMagnifyingGlass, faBell, faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { chatState } from "../Context/chatContext";

const SideDrawer = () => {

    const {user} = chatState() ;

    const [search, setSearch] = useState("") ;
    const [searchResult, setSearchResult] = useState([]) ;
    const [loading, setLoading] = useState(false) ;
    const [loadingChat, setLoadingChat] = useState(  ) ;

    return(
        <>
        <div className="flex justify-between items-center bg-white w-[100%] px-5 pt-5 pb-5 border-4">

            <div>
                <button className="bg-blue-100 p-2 rounded-md" title="Search Users To Chat">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>  <span className="hidden sm:inline">Search User</span>
                </button>
            </div>

            <div className="text-2xl">
                Talk-A-Tive
            </div>

            <div className=" p-2  flex items-center justify-center">
                <menu>
                    <button className="p-1 pr-5">
                        <FontAwesomeIcon className="text-2xl" icon={faBell} />
                    </button>
                    {/* <MenuList></MenuList> */}
                </menu>

                <menu>
                    <button className="flex items-center justify-center bg-blue-100 p-2 rounded-md">
                        <img class="w-12 h-12 rounded-full mr-2 p-1" name={user.name} src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/>  
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </menu>
            </div>

        </div>
        </>
    )
}

export default SideDrawer ;