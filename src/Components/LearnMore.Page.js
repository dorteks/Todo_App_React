import React from "react";

function LearnMorePage() {
  return (
    <div class="bg-[url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png')] h-full w-full bg-cover bg-center">
      {/* About the app */}
      <div class="ml-1">
        <section class="dark:bg-gray-900">
          <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-2 lg:px-5" />
          <div>
            <div class="mb-3 text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white">
              About Todo App
            </div>
            <p class="mb-5 font-light text-center text-gray-400 lg:mb-5 sm:text-xl dark:text-gray-300">
              Manage your tasks effectively
            </p>
          </div>
          <div class="grid lg:mb-5 mr-1 lg:grid-cols-2">
            <div class="flex flex-col ml-6 pt-4 dark:bg-gray-800 dark:border-gray-700">
              <p class="text-lg pt-3 ml-2 list-outside">
                What brought about the app?, what difficulties does it target to
                solve?, what solutions does it provide?
              </p>
              <p class="text-sm pt-2 ml-2 text-gray-500 dark:text-gray-200">
                An increasing need to provide a more efficient means of managing
                daily tasks/routine.
              </p>
              <p class="text-lg pt-3 ml-2 list-outside">
                Description of the app?
              </p>
              <p class="text-sm pt-2 ml-2 text-gray-500 dark:text-gray-200">
                It is a simple app designed to take lists of tasks needed to be
                done, removing/archiving lists of tasks completed and a reminder
                for pending tasks.
              </p>
              <p class="text-lg pt-3 ml-2 list-outside">
                What makes the app special? - distinctive features
              </p>
              <p class="text-sm pt-2 ml-2 text-gray-500 dark:text-gray-200">
                It has special in-built features which enables seamless UI
                interaction, easy to use and fast user response.
              </p>
            </div>
            <div class="flex pl-3 ml-6 pt-4 dark:bg-gray-800 dark:border-gray-700 ">
              <ul class="text-lg pt-3 pl-3 ml-3 list-outside">
                <p>Applications</p>
                <div class="text-sm pt-3 text-gray-500 dark:text-gray-200">
                  <li class="pb-1">Daily todo tasks.</li>
                  <li class="pb-1">Project management.</li>
                  <li class="pb-1">Logging details of finished tasks.</li>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Testimonials */}
      <div>
        <section class="dark:bg-gray-900">
          <div class="py-5 px-4 mx-auto max-w-screen-xl text-center lg:py-2 lg:px-5" />
          <div class="mx-auto max-w-screen-sm">
            <h2 class="mb-1 text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p class="font-light text-center text-gray-400 lg:mb-6 sm:text-xl dark:text-gray-300">
              What people said about our services
            </p>
          </div>
          <div class="grid mb-3 lg:mb-10 lg:grid-cols-3">
            <figure class="flex flex-col mr-2 justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <svg
                class="h-6 mx-auto mb-1 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote class="mx-auto mb-5 max-w-xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                  Executing my daily tasks has been made easy
                </h3>
                <p class="my-2 text-sm">
                  "I started using Todo App recently.It has made planning and
                  scheduling my daily official tasks very easy. I love how the
                  reminder function of the app notifies me of pending tasks to
                  be done. This app is superb!.
                </p>
                <p class="my-1 text-sm">
                  If you care to manage your tasks effectively, I recommend this
                  Todo app."
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-9 h-9 rounded-full"
                  src="https://i.stack.imgur.com/VA0YR.png?s=192&g=1"
                  alt=""
                />
                <div class="space-y-0.5 font-sm dark:text-white text-left">
                  <div className="text-lg">Dorteks Bobo</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Operation Manager at The Solar Shop Ltd., NGA
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col mr-2 justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <svg
                class="h-6 mx-auto mb-1 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote class="mx-auto mb-5 max-w-xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                  Executing my daily tasks has been made easy
                </h3>
                <p class="my-2 text-sm">
                  "I started using Todo App recently.It has made planning and
                  scheduling my daily official tasks very easy. I love how the
                  reminder function of the app notifies me of pending tasks to
                  be done. This app is superb!.
                </p>
                <p class="my-1 text-sm">
                  If you care to manage your tasks effectively, I recommend this
                  Todo app."
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-9 h-9 rounded-full"
                  src="https://i.stack.imgur.com/VA0YR.png?s=192&g=1"
                  alt=""
                />
                <div class="space-y-0.5 font-sm dark:text-white text-left">
                  <div class="text-lg">Dorteks Bobo</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Operation Manager at The Solar Shop Ltd., NGA
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col mr-2 justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <svg
                class="h-6 mx-auto mb-1 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote class="mx-auto mb-5 max-w-xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                  Executing my daily tasks has been made easy
                </h3>
                <p class="my-2 text-sm">
                  "I started using Todo App recently.It has made planning and
                  scheduling my daily official tasks very easy. I love how the
                  reminder function of the app notifies me of pending tasks to
                  be done. This app is superb!.
                </p>
                <p class="my-1 text-sm">
                  If you care to manage your tasks effectively, I recommend this
                  Todo app."
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img
                  class="w-9 h-9 rounded-full"
                  src="https://i.stack.imgur.com/VA0YR.png?s=192&g=1"
                  alt=""
                />
                <div class="space-y-0.5 font-sm dark:text-white text-left">
                  <div className="text-lg">Dorteks Bobo</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Operation Manager at The Solar Shop Ltd., NGA
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LearnMorePage;
