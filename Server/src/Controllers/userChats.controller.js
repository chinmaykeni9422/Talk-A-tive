import chats from "../data/data.js"

// controllers 
const getChats = () => {
    res.send(chats) ;
}

export {getChats} ;