import {Router} from "express" ;
import protect from "../Middlewares/authMiddleware.js";
import { accessChat, fetchChats, createGropuChat, renameGroup, addToGroup, removeFromGroup} from "../Controllers/chat.controller.js";

const router = Router() ;

router.route("/").post(protect, accessChat) ;
router.route("/").get(protect, fetchChats) ;
router.route("/group").post(protect, createGropuChat) ;
router.route("/rename").put(protect, renameGroup) ;
router.route("/groupadd").put(protect, addToGroup) ;
router.route("/groupremove").put(protect, removeFromGroup) ;

export default router ;