import asyncHandler from "express-async-handler";
import User from "../Models/User.model.js";
import {uploadOnCloudinary} from "../Utils/cloudnary.js"

const signUpUser = asyncHandler(async (req, res) => {
  //get user details from client
  const { Name, Email, password, confirmPassword } = req.body;

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
  const userExists = await User.findOne({ Email });
  if (userExists) {
    res.status(409);
    throw new Error("User already exists");
  }

  // handle image files
  const imageLocalPath = req.files?.image[0]?.path;
  // if(!imageLocalPath){
  //   res.status(400);
  //   throw new Error("image file is required");
  // }
  const image = await uploadOnCloudinary(imageLocalPath);

  // create user object - create entry in db
  const user = await User.create({
    Name,
    Email,
    password,
    image : image.url
  }) ;

  // send response to front end
  if (user) {
    res.status(201).json({
      _id: user._id,
      Name: user.Name,
      Email: user.Email,
      Image: user.Image,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the User");
  }
});

const logInUser = () => {};

export { signUpUser, logInUser };
