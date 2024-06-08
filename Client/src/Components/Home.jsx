import React from 'react'
import Tab from './Tab';

function Home() {
  return (
    <>
      <div class="flex flex-col items-center  pt-5 h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="h-14 w-[600px] text-center mb-1 flex justify-center rounded-lg text-3xl items-center bg-white">
          Talk-A-Tive
        </div>

        <div className="w-[600px] text-center flex justify-center rounded-lg text-3xl items-center bg-white">
          <Tab />
        </div>
      </div>
    </>
  );
}

export default Home