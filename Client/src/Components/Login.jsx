import React, {useState} from 'react'
import axios from "axios" ;
import {useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate();

  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email)
  console.log(password)


  const loginUser = async (event) => {
    event.preventDefault() ;

    // if(!email || !password){
    //   alert("Please Fill all the Fields")
    // }

    axios.post("/api/v1/users/login",{
      email, 
      password
    })
    .then((response) => {
      const data = response.data ;
      alert(`${data.name} Login Succesfull`) ;
      console.log(data) ;
      navigate("/Chats") ;
    })
    .catch((error) => {
      if(error.response){
        window.alert(error.message)
      }
    })
  }
  
  
  return (
    <>
      <form method="POST" className="space-y-4 md:space-y-6">
        <div className="flex flex-col items-start">
          <label
            htmlFor="Email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email :
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email"
            required=""
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            password :
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your password"
            required=""
          />
        </div>

        <button
          type="submit"
            onClick={loginUser}
          className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => {
            setEmail("guest@example.com") ;
            setPassword("12345612");
          }}
          className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Get Guest User Credentials
        </button>
      </form>
    </>
  );
}

export default Login