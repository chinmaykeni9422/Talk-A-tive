import React, {useEffect} from 'react'
import Tab from './Tab';
import {useNavigate} from 'react-router-dom'
import { chatState } from "../Context/chatContext";


function Home() {

  const navigate = useNavigate();

  const {user} = chatState() ;

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo") ;

    if(user){
      navigate("/chats") ;
    }
  }, [navigate])

  return (
    <>
      <div className="flex flex-col items-center  pt-5 h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="h-14 w-[600px] text-center mb-1 flex justify-center rounded-lg text-3xl items-center bg-white">
          Talk-A-Tive
        </div>

        <div className="w-[600px] text-center flex justify-center rounded-lg text-3xl items-center bg-white">
          <Tab />
        </div>
      </div>
    </>
  );
}

export default Home