import React from "react" ;

const UserListItem = ({user, handleFunction}) => {

    return (
        <>
            <ul>
                <li>{user.name}</li>
            </ul>
        </>
    )
}

export default UserListItem ;