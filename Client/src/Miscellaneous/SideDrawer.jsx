import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faMagnifyingGlass, faBell, faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons"
import { chatState } from "../Context/chatContext";
import ProfileModal from "./ProfileModal";
import {useNavigate} from "react-router-dom" ;

const SideDrawer = () => {

    const navigate = useNavigate() ;

    const {user} = chatState() ;
 
    const [search, setSearch] = useState("") ;
    const [searchResult, setSearchResult] = useState([]) ;
    const [loading, setLoading] = useState(false) ;
    const [loadingChat, setLoadingChat] = useState(  ) ;
    const [show, setShow] = useState(false) ;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
        setShow(!show) ;
    }
    const closeModal = () => setIsModalOpen(false);

    const logoutHandler = () => {
        localStorage.removeItem("userInfo") ;
        navigate("/") ;
    }

    return(
        <>

        {isModalOpen && (
            <ProfileModal
            user={user}
            onClose={closeModal}
            />
        )}

        <div className="flex justify-between items-center bg-white w-[100%] px-5 pt-2 pb-2 border-4">

            <div>
                <button className="bg-blue-100 p-2 hover:bg-blue-200 rounded-md" title="Search Users To Chat">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>  <span className="hidden sm:inline">Search User</span>
                </button>
            </div>

            <div className="text-2xl">
                Talk-A-Tive
            </div>

            <div className="   flex items-center justify-center">
                <menu>
                    <button className="p-1 pr-2">
                        <FontAwesomeIcon className="text-2xl" icon={faBell} />
                    </button>
                    {/* <MenuList></MenuList> */}
                </menu>

                <menu>
                    <button onClick={() => setShow(!show)} className="flex cursor-pointer items-center justify-center p-2 rounded-md hover:bg-blue-100">
                        <img className="w-12 h-12 rounded-full mr-2 p-1" src={`${user.pic ? user.pic : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}  `} alt="Rounded avatar"/>  
                        {show? <FontAwesomeIcon icon={faChevronUp}/>:<FontAwesomeIcon icon={faChevronDown}/>}
                    </button>

                    <div className={`
                                absolute flex flex-col top-20 right-6 rounded-md gap-3 bg-blue-100 w-[150px] p-4 
                                ${show ? 'visible opacity-100':'invisible opacity-50'}
                            `}>

                        <button onClick={openModal} className="rounded-md hover:bg-blue-300 p-2 hover:text-gray-100 bg-white ">
                            My Profile
                        </button>

                        <button onClick={logoutHandler} className="rounded-md hover:bg-blue-300 p-2 hover:text-gray-100 bg-white ">
                            Logout
                        </button>

                    </div>
                </menu>
            </div>

        </div>
        </>
    )
}

export default SideDrawer ;