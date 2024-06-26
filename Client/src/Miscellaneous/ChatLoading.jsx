import React from "react"

const ChatLoading = () => {
    return (
        <>
            <div className="animate-pulse p-4 space-y-4">
                <div className="h-4 bg-gray-300 w-full"></div>
                <div className="h-4 bg-gray-300 w-full"></div>
                <div className="h-4 bg-gray-300 w-full"></div>
                <div className="h-4 bg-gray-300 w-full"></div>
                <div className="h-4 bg-gray-300 w-full"></div>
            </div>
        </>
    )
}

export default ChatLoading;