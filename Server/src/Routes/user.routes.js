import {Router} from "express" ;
import {getChats, getSingleChat} from "../Controllers/userChats.controller.js"

const router = Router() ;

router.route("/chats").get(getChats)

router.route("/chats/:id").get(getSingleChat);

export default router ;