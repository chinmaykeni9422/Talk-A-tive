import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <div
      className="flex items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-md cursor-pointer transition duration-150 ease-in-out m-2"
      onClick={() => handleFunction(user)}
    >
      <img
        src={user.pic ? user.pic : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'}
        alt={user.name}
        className="w-10 h-10 rounded-full mr-4"
      />
      <div className="flex flex-col">
        <span className="font-medium text-white">{user.name}</span>
        <span className="text-sm text-gray-400">{user.email}</span>
      </div>
    </div>
  );
};

export default UserListItem;

