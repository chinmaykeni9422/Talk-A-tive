import {Router} from "express" ;
import { signUpUser, logInUser } from "../Controllers/user.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";


const router = Router() ;

router.route("/").post(
  upload.fields([
    {
      name: "pic",
      maxCount: 1,
    },
  ]),
  signUpUser
);

router.route("/login").post(logInUser) ;

export default router ;