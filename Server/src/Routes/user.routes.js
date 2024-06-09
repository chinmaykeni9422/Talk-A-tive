import {Router} from "express" ;
import { signUpUser, logInUser } from "../Controllers/user.controller/js";


const router = Router() ;

router.route("/").post(signUpUser) ;

router.route("/login").post(logInUser) ;

export default router ;