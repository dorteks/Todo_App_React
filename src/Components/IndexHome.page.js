import React from "react";
import ripped_todo from "./Images/ripped_todo.jpg";
import creative_todo from "./Images/creative_todo.jpg";

function IndexHomePage() {
  return (
    <div className="bg-[url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png')] h-full w-full bg-cover bg-center pl-10 pt-5">
      {/* Tab Upper Deck */}
      <div>
        <div class="flex flexrow border-b border-gray-200 dark:border-gray-700">
          <div class="basis-1/2"></div>
          <div class="basis-1/2">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li class="mr-2">
                <a
                  href="/dashboard"
                  class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
                  aria-current="page"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li class="flex mr-2">
                <a
                  href="/profile"
                  class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Introductions */}
      <div>
        <div></div>
        <div></div>
      </div>
      {/* Samples */}
      <div className="">
        <p>Todo and project management made easy</p>
        <p>
          We are a team of talented engineers managing your todos and project
          executions
        </p>
        <p>Create a list to manage your todos and project</p>
      </div>
      <div className="flex justify-center items-center mr-2 gap-x-7">
        <img src={creative_todo} alt="" className="h-80 w-70" />
        <img src={ripped_todo} alt="" className="h-90 w-80" />
      </div>

      <div>Create your TodoList</div>
    </div>
  );
}

export default IndexHomePage;
