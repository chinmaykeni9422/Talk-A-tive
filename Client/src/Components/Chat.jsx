import axios from "axios" ;
import { useEffect, useState } from "react";

function Chat() {

  const [chats, setChats] = useState([])

  const Chat = async () => {
    const {data} = await axios.get("/api/v1/users/chats");
    setChats(data) ;
  }

  useEffect(() => {
    Chat() ;
  }, [])

  return (
    <>
      <div>
        {chats.map((item) => (
          <div key={item._id}>{item.chatName}</div>
        ))}
      </div>
    </>
  );
}

export default Chat