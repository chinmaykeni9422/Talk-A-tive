import React from 'react'


function Home() {
  return (
    <>
      <div class="flex flex-col items-center  pt-10 h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="h-14 w-[750px] text-center mb-3 flex justify-center rounded-lg text-3xl items-center bg-white">
          Talk-A-Tive
        </div>

        <div className="h-14 w-[750px] text-center flex justify-center rounded-lg text-3xl items-center bg-white">
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="me-2">
              <a
                href="#"
                class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                aria-current="page"
              >
                Tab 1
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Tab 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home