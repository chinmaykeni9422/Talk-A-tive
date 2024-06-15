import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(null);

  const postDetails = (pics) => {
    if (pics === undefined) {
      alert("Please select an image");
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      setPic(pics);
    } else {
      alert("Please select a valid image type (jpeg or png)");
    }
  };

  const postData = async (event) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    if (pic) {
      formData.append("pic", pic);
    }

    try {
      const response = await axios.post("/api/v1/users/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response) ;
      // alert(response.data.message);
      alert("User registered") ;
    } catch (error) {
      window.alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <form method="POST" className="space-y-4 md:space-y-6" encType="multipart/form-data">
        <div className="flex flex-col items-start">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required=""
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email"
            required=""
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your password"
            required=""
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password :</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Confirm your password"
            required=""
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Your Image :</label>
          <input
            type="file"
            onChange={(e) => postDetails(e.target.files[0])}
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

