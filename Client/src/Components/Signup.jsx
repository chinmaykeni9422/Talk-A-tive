import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });

  let name, value;

  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword, pic } = user;

    axios
      .post("/api/v1/users/", {
        name,
        email,
        password,
        confirmPassword,
        pic,
      })
      .then((response) => {
        const data = response.data;
        alert(data.message);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  return (
    <>
      <form method="POST" className="space-y-4 md:space-y-6">
        <div className="flex flex-col items-start">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name :
          </label>
          <input
            type="text"
            onChange={handleInput}
            value={user.name}
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required=""
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email :
          </label>
          <input
            type="email"
            onChange={handleInput}
            value={user.email}
            name="email"
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
            onChange={handleInput}
            value={user.password}
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your password"
            required=""
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Conform Password :
          </label>
          <input
            type="password"
            onChange={handleInput}
            value={user.confirmPassword}
            name="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="confirm your password"
            required=""
          />
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="pic"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload Your Image :
          </label>
          <input
            type="file"
            onChange={handleInput}
            value={user.pic}
            name="pic"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>

        <button
          type="submit"
          onClick={postData}
          className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;
