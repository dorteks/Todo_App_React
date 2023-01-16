import React from "react";

function SettingPage() {
  return (
    <div className="bg-[url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png')] h-full w-full bg-cover bg-center pl-5 pt-7">
      <>
        <div className="pb-3">Account</div>
        <div>
          <h3 className="text-lg mt-5  ">Your Account</h3>
          <p className="text-sm mt-2 font-light">
            You sign in to TodoApp with your Google Account
          </p>

          <div className="flex justify-between mt-10 ">
            <h3 className="text-lg ">Google Account</h3>
            <div className="mr-48">
              <p className="text-sm mt-2   font-light">
                View or change your Google Account settings{" "}
              </p>
              <p className="text-sm mt-2 font-light">
                You will be redirected to your Google Account page
              </p>
            </div>
          </div>

          <div className="flex justify-between  mt-10 ">
            <h3 className="text-lg mr-96 ">Membership</h3>
            <div className="mr-64">
              <p className="text-sm mt-2 font-light">
                No membership | Get TodoApp Premium{" "}
              </p>
              <p className="text-sm mt-2 font-light">
                TodoApp Premium offers so much more
              </p>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="pb-3 mt-14 ">Notifications</div>
        <div>
          <h3 className="text-lg mt-5  ">Notifications</h3>
          <p className="text-lg mt-2 ">Choose when and how to be notified </p>
          <p className="text-sm mt-2 font-light">
            Select push and email notifications you'd like to receive{" "}
          </p>

          <h3 className="text-lg mt-5  ">General</h3>
          <p className="text-sm mt-2 font-light">
            Manage your mobile and desktop notifications
          </p>

          <div className="flex justify-between mt-10 ">
            <h3 className="text-lg ">Desktop notifications</h3>
            <div className="mr-96">
              <p> Add a slider here </p>
              <p className="text-sm mt-2   font-light">
                Get notifications in this browser
              </p>
              <p className="text-sm mt-2 font-light">
                Receive notifications on your computer
              </p>
            </div>
          </div>

          <div className="flex justify-between  mt-10 ">
            <h3 className="text-lg mr-96 ">Your prefeerences</h3>
            <div className="mr-64">
              <p className="text-sm mt-2 font-light">
                No membership | Get TodoApp Premium{" "}
              </p>
              <p className="text-sm mt-2 font-light">
                TodoApp Premium offers so much more
              </p>
            </div>
          </div>
        </div>
      </>
      <>
        <div>Privacy</div>
      </>
      <>
        <div>Advanced Settings</div>
      </>
    </div>
  );
}

export default SettingPage;
