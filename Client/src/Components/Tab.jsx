import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Tabs = () => {

  const [openTab, setOpenTab] = React.useState(1);
  
  return (
    <>
      <div className="flex w-[700px] flex-wrap">
        <div className="w-full p-2">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? `text-white bg-blue-600`
                    : `text-blue-600 bg-white`)
                }
                onClick={() => {
                  setOpenTab(1);
                }}
              >
                LogIn
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? `text-white bg-blue-600`
                    : `text-blue-600 bg-white`)
                }
                onClick={() => {
                  setOpenTab(2);
                }}
              >
                SignUp
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"}>
                  <Login />
                </div>

                <div className={openTab === 2 ? "block" : "hidden"}>
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs ;
