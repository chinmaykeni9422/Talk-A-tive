import { useContext, useEffect, useState, createContext } from "react";
// import {useNavigate} from 'react-router-dom'

const chatContext = createContext() ;

export const ChatProvider = ({children}) => {

    // const navigate = useNavigate();

    const [user, setUser] = useState(null) ;
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo) ;
        console.log(userInfo) ;

        if(!userInfo){
            // navigate("/") ;
            Console.log("user os not found") ;
        }
    }, [])

    return (
        <chatContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </chatContext.Provider>
    )
}

export const chatState = () => {
    return useContext(chatContext) ;
}

