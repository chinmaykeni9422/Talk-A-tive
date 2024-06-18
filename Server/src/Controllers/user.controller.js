import asyncHandler from "express-async-handler";
import User from "../Models/User.model.js";
import {uploadOnCloudinary} from "../Utils/cloudnary.js"
import generateToken from "../config/GenerateToken.js";

const signUpUser = asyncHandler(async (req, res) => { 
  console.log("Request Body:", req.body);
  console.log("Uploaded File:", req.file);
  //get user details from client
  const { name, email, password, confirmPassword } = req.body;

  //validation - noot empty
  if (!name || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error("Please enter all the feilds");
  }

  //check if password and confirm password is correct or not
  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Password and confirm password is not matched");
  }

  // check if user already exits
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(409);
    throw new Error("User already exists");
  }

  // handle image files
  // Handle image files
  let picUrl = null;
  if (req.file) {
    const imageLocalPath = req.file.path;
    try {
      const pic = await uploadOnCloudinary(imageLocalPath);
      picUrl = pic.url;
    } catch (error) {
      res.status(500);
      throw new Error("Error uploading image to Cloudinary");
    }
  }

  // create user object - create entry in db
  const user = await User.create({
    name,
    email,
    password,
    pic: picUrl,
  }); ;

  // send response to front end
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the User");
  }
});

const logInUser = asyncHandler( async (req, res) => {
  const {email, password} = req.body ;

  const user = await User.findOne({email}) ;

  if (user && (await user.isPasswordCorrect(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});


// we are using querries eg: /api/a1/users/search=chinmay
const allUsers = asyncHandler ( async (req, res) => {
  const keyword = req.query.search ? {
    $or: [
      {name : { $regex : req.query.search, $options: "i"}},
      {email : {$regex: req.query.search, $options: "i"}}
    ]
  } : {} ;

  const users = await User.find(keyword).find({_id: {$ne: req.user._id}}) ;

  res.send(users) ;
}) ;

export { signUpUser, logInUser, allUsers };
