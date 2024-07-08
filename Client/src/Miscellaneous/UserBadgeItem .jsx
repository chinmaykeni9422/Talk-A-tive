import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faXmark} from "@fortawesome/free-solid-svg-icons"

function UserBadgeItem ({user, handleFunction}) {
  return (
    <>
      
      <div className='px-2 py-1 rounded-lg m-1 mb-1 bg-blue-500 text-white font-bold text-sm cursor-pointer '>
        {user.name}
        <FontAwesomeIcon onClick={handleFunction} className='pl-1' icon={faXmark}/>
      </div>

    </>
  )
}

export default UserBadgeItem 
