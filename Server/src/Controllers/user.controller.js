import asyncHandler from "express-async-handler";
import User from "../Models/User.model.js";

const signUpUser = asyncHandler( async (req, res) => {
  //get user details from client
  const { Name, Email, password, confirmPassword, image } = req.body;

  //validation - noot empty
  if (!Name || !Email || !password || !confirmPassword) {
    res.status(400);
    throw new Error("Please enter all the feilds");
  }

  //check if password and confirm password is correct or not
  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Password and confirm password is not matched");
  }

  // check if user already exits
  const userExists = await User.findOne({Email}) ;
  if(userExists){
    res.status(409);
    throw new Error("User already exists");
  }
});

const logInUser = () => {};

export { signUpUser, logInUser };
