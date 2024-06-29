import React from "react";
import { chatState } from "../Context/chatContext.jsx";
import SideDrawer from "../Miscellaneous/SideDrawer.jsx";
import MyChats from "../Miscellaneous/MyChats.jsx";
import MyBox from "../Miscellaneous/MyBox.jsx"

function Chat() {

  const { user } = chatState();

  return (
    <>
      <div className="w-full">

        {user && <SideDrawer />}

        <div className="flex w-full h-[90.5vh] p-2">

          <div className="mr-2 flex-[4]">
            {user && <MyChats />}
          </div>

          <div className="bg-blue-300 flex-[6]">
            {user && <MyBox />}
          </div>
          
        </div>

      </div>
    </>
  );
}

export default Chat