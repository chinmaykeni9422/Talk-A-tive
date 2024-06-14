import {Router} from "express" ;
import { signUpUser, logInUser } from "../Controllers/user.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";


const router = Router() ;

router.route("/").post(upload.single('pic'), signUpUser);

router.route("/login").post(logInUser) ;

export default router ;