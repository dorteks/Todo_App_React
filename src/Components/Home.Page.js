import React from "react";
import creative_todo from "./Images/creative_todo.jpg";

function HomePage() {
  return (
    <div className="bg-[url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png')] h-full w-full bg-cover bg-center pl-4 pt-3">
      {/* Tab Upper Deck */}
      <div>
        <div class="flex flex-row border-b border-gray-200 dark:border-gray-700">
          <div class="basis-1/2 flex justify-center gap-x-3 self-center items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-10 w-10 `}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <h1 className={`text-black origin-left font-medium text-3xl`}>
              TODO APP
            </h1>
          </div>
          <div class="basis-1/2 ">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li class="mr-2">
                <a
                  href="/premium"
                  class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
                  aria-current="page"
                >
                  Premium
                </a>
              </li>
              <li class="flex mr-2">
                <a
                  href="/help"
                  class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  Help
                </a>
              </li>
              <li class="flex mr-2">
                <a
                  href="/download"
                  class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  Download
                </a>
              </li>
              <li class="flex mr-2">
                <a
                  href="/?"
                  class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  |
                </a>
              </li>
              <li class="flex mr-2">
                <a
                  href="/sign-up"
                  class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  Sign Up
                </a>
              </li>
              <li class="flex mr-2">
                <a
                  href="/sign-in"
                  class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Tab Middle */}

      <div class="grid lg:mb-5 mr-1 lg:grid-cols-2 pt-5">
        <div class="flex pl-3 ml-1 pt-4 dark:bg-gray-800 dark:border-gray-700">
          <img
            src={creative_todo}
            alt=""
            className="h-90 w-70 rounded-br-full "
          />
        </div>
        <div class="flex flex-col justify-center ml-6 p-8 pt-4 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-row justify-center">
            <p class="text-3xl">Todo and project management made easy</p>
          </div>
          <div class="flex flex-row justify-center pt-12 gap-x-7 ">
            <p class="text-xl pt-3">Create a Todo</p>
            <button>
              <a
                href="/todolist"
                class="justify-items-center text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-full text-lg px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
              >
                Get Started
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* Tab Buttom */}
    </div>
  );
}

export default HomePage;
