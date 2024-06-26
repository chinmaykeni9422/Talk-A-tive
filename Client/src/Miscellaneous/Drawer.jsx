import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faXmark} from "@fortawesome/free-solid-svg-icons"

const Drawer = ({isOpenDrawer, toggle}) => {

    return(
        <>
            <div>
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
                    isOpenDrawer ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="p-2">
                    <button className='fixed left-56 text-2xl ' onClick={toggle}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <h2 className="text-xl font-bold">Drawer Title</h2>
                    <p className="mt-4">Drawer Content</p>
                </div>
            </div>

                {/* {isOpenDrawer && (
                    <div
                    className="fixed inset-0 text-white bg-black opacity-50"
                    >
                    </div>
                )} */}

            </div>
        </>
    ) ;
} ;

export default Drawer ;