import { useContext, useEffect, useState, createContext } from "react";
import {useNavigate} from 'react-router-dom'

const chatContext = createContext() ;

const chatProvider = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null) ;
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo) ;

        if(!userInfo){
            navigate("/") ;
        }
    }, [navigate])

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

export default chatProvider ;