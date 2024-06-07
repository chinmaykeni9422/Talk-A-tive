import axios from "axios" ;
import { useEffect } from "react";

function Chat() {

  const Chat = async () => {
    const {data} = await axios.get("/api/v1/users/chats");
    console.log(data) ;
  }

  useEffect(() => {
    Chat() ;
  }, [])

  return (
    <>
      <div>{}</div>
    </>
  )
}

export default Chat