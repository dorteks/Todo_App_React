import React from "react";
import creative_todo from "./Images/creative_todo.jpg";

function SignInPage() {
  return (
    <div className="bg-[url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png')] h-full w-full bg-cover bg-center pl-7 pt-5">
      <div class="grid lg:mb-5 mr-1 lg:grid-cols-2">
        <div class="flex items-center p-12 dark:bg-gray-800 dark:border-gray-700">
          <img src={creative_todo} alt="" className="rounded-br-full " />
        </div>{" "}
        <div class="flex flex-col items-center justify-center py-6 md:h-screen">
          <div class="flex justify-center mb-4 gap-x-1 self-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 `}
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
            <h1 className={`text-black origin-left font-medium text-xl`}>
              TODO APP
            </h1>
          </div>
          <div class="flex mb-4 gap-x-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:py-6 dark:bg-gray-800 dark:border-gray-700">
            <div class="w-96 space-y-4 md:space-y-12 space-x-32 sm:p-10">
              <div class=" mb-3 text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
                <form class="flex flex-col space-y-6 md:space-y-9 " action="#">
                  <h1 class="flex justify-center self-center items-center">
                    Sign in to your account
                  </h1>
                  <div>
                    <label
                      for="email"
                      class="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    class="text-gray-900 bg-gradient-to-r from-white to-teal-100 hover:bg-gradient-to-r hover:from-teal-200 hover:to-white focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Sign In
                  </button>
                  <p class="flex justify-center  text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account yet?{" "}
                    <a
                      href="/sign-up"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign Up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
