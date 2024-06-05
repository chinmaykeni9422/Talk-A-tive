import chats from "../data/data.js"

// controllers 
const getChats = (req, res) => {
    res.send(chats) ;
}

const getSingleChat = (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id) ;
    res.send(singleChat) ;
}

export {getChats, getSingleChat} ;