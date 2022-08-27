import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactUsPage from "./Components/ContactUs.Page";
import HomePage from "./Components/Home.Page";
import SingleTodo from "./Components/SingleTodo.Page";
import LearnMorePage from "./Components/LearnMore.Page";
import TodoPage from "./Components/Todo.Page";
import SettingPage from "./Components/Setting.Page";
import SignUppage from "./Components/SignUp.page";
import SignInPage from "./Components/SignIn.Page";

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="flex container mx-auto">
            <div
              className={`${
                open ? "w-60" : "w-40"
              } duration-500  h-screen p-5 pt-8  bg-sky-blue relative`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-7 w-7 absolute cursor-pointer rounded-full
                -right-4 top-8 duration-1000 ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className={`flex gap-x-4 items-center `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-7 w-7 cursor-pointer duration-500 ${
                    open && "rotate-[360deg]"
                  } `}
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
                <h1
                  className={`text-white origin-left font-medium text-xl duration-500 ${
                    !open && "scale-0"
                  } `}
                >
                  TODO APP
                </h1>
              </div>
              <ul
                className={`pt-6 pb-3 flex-y items-center gap-x-4 cursor-pointer`}
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 my-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <Link
                    to="/"
                    className={`text-white mb-4 w-full rounded-md p-2.5 font-medium
                    ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-4 hover:bg-white/[0.8] hover:text-black ${
                      !open && "scale-0"
                    } `}
                  >
                    HOME{" "}
                  </Link>
                </li>
                <li className="flex gap-x-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 my-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <Link
                    to="/todolist"
                    className={`text-white mb-3 w-full rounded-md p-2.5 font-medium
                    ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 hover:bg-white/[0.8] hover:text-black ${
                      !open && "scale-0"
                    } `}
                  >
                    ToDos
                  </Link>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 my-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <Link
                    to="/learn-more"
                    className={`text-white mb-3 w-full rounded-md p-2.5 font-medium
                    ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 hover:bg-white/[0.8] hover:text-black ${
                      !open && "scale-0"
                    } `}
                  >
                    LEARN MORE
                  </Link>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 my-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <Link
                    to="/contact-us"
                    className={`text-white mb-3 w-full rounded-md p-2.5 font-medium
                    ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 hover:bg-white/[0.8] hover:text-black ${
                      !open && "scale-0"
                    } `}
                  >
                    CONTACT US
                  </Link>
                </li>
                <li className="flex gap-x-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 my-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <Link
                    to="/setting"
                    className={`text-white mb-3 w-full rounded-md p-2.5 font-medium
                    ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 hover:bg-white/[0.8] hover:text-black ${
                      !open && "scale-0"
                    } `}
                  >
                    Setting
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" pl-1 text-2xl font-semibold flex-1 h-screen bg-new-color">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/learn-more" element={<LearnMorePage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route path="/todolist" element={<TodoPage />} />
                <Route path="/todolist/:todoId" element={<SingleTodo />} />
                <Route path="/sign-up" element={<SignUppage />} />
                <Route path="/sign-in" element={<SignInPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
