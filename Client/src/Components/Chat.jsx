import React from "react";
import { chatState } from "../Context/chatContext.jsx";
import SideDrawer from "../Miscellaneous/SideDrawer.jsx" ;
import MyChats from "../Miscellaneous/MyChats.jsx" ;
import MyBox from "../Miscellaneous/MyBox.jsx"

function Chat() {

  const {user} = chatState() ;

  return (
    <>
      <div className="w-ful">

        {user && <SideDrawer/>}

        <div className="flex space-between w-[100%] h-[87.5vh] p-1 ">

          <div className="flex-auto">
            {user && <MyChats/>}
          </div>

          <div className="flex-auto">
            {user && <MyBox/>}
          </div>

        </div>

      </div>
    </>
  );
}

export default Chat