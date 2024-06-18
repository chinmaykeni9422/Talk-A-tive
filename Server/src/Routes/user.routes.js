import {Router} from "express" ;
import { signUpUser, logInUser, allUsers } from "../Controllers/user.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";
import protect from "../Middlewares/authMiddleware.js";


const router = Router() ;

router.route("/").post(upload.single('pic'), signUpUser).get(protect, allUsers);

router.route("/login").post(logInUser) ;

export default router ;