import React, { useState } from "react";

const NavBar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [chatDropdownOpen, setChatDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <div className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Hamburger Toggle BTN */}
          <button
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarToggle && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarToggle && "!w-full delay-400"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarToggle && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarToggle && "!h-0 delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !sidebarToggle && "!h-0 dealy-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* Hamburger Toggle BTN */}
          <a className="block flex-shrink-0 lg:hidden" href="index.html">
            <img src="./images/logo/logo-icon.svg" alt="Logo" />
          </a>
        </div>
        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li>
              {/* Dark Mode Toggler */}
              <label
                className={`${
                  darkMode ? "bg-primary" : "bg-stroke"
                } relative m-0 block h-7.5 w-14 rounded-full`}
              >
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
                />
                <span
                  className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
                    darkMode && "!right-[3px] !translate-x-full"
                  }`}
                >
                  <span className="dark:hidden">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99992 12.6666C10.5772 12.6666 12.6666 10.5772 12.6666 7.99992C12.6666 5.42259 10.5772 3.33325 7.99992 3.33325C5.42259 3.33325 3.33325 5.42259 3.33325 7.99992C3.33325 10.5772 5.42259 12.6666 7.99992 12.6666Z"
                        fill="#969AA1"
                      />
                      <path
                        d="M8.00008 15.3067C7.63341 15.3067 7.33342 15.0334 7.33342 14.6667V14.6134C7.33342 14.2467 7.63341 13.9467 8.00008 13.9467C8.36675 13.9467 8.66675 14.2467 8.66675 14.6134C8.66675 14.9801 8.36675 15.3067 8.00008 15.3067ZM12.7601 13.4267C12.5867 13.4267 12.4201 13.3601 12.2867 13.2334L12.2001 13.1467C11.9401 12.8867 11.9401 12.4667 12.2001 12.2067C12.4601 11.9467 12.8801 11.9467 13.1401 12.2067L13.2267 12.2934C13.4867 12.5534 13.4867 12.9734 13.2267 13.2334C13.1001 13.3601 12.9334 13.4267 12.7601 13.4267ZM15.4001 8.66675H15.3467C14.9801 8.66675 14.6801 8.36675 14.6801 8.00008C14.6801 7.63341 14.9801 7.33342 15.3467 7.33342C15.7134 7.33342 16.0134 7.63341 16.0134 8.00008C16.0134 8.36675 15.7267 8.66675 15.4001 8.66675ZM1.65341 8.66675H1.60008C1.23341 8.66675 0.933416 8.36675 0.933416 8.00008C0.933416 7.63341 1.23341 7.33342 1.60008 7.33342C1.96675 7.33342 2.26675 7.63341 2.26675 8.00008C2.26675 8.36675 1.98008 8.66675 1.65341 8.66675ZM3.77342 13.4267C3.60675 13.4267 3.44008 13.3601 3.31342 13.2334C3.05342 12.9734 3.05342 12.5534 3.31342 12.2934L3.40008 12.2067C3.66008 11.9467 4.08008 11.9467 4.34008 12.2067C4.60008 12.4667 4.60008 12.8867 4.34008 13.1467L4.25342 13.2334C4.12675 13.3601 3.94675 13.4267 3.77342 13.4267ZM8.00008 2.06675C7.63341 2.06675 7.33342 1.78008 7.33342 1.44008V1.38675C7.33342 1.02008 7.63341 0.720083 8.00008 0.720083C8.36675 0.720083 8.66675 1.02008 8.66675 1.38675C8.66675 1.75342 8.36675 2.06675 8.00008 2.06675ZM11.6134 4.99341C11.4401 4.99341 11.2734 4.92675 11.1401 4.80008C10.8801 4.54008 10.8801 4.12008 11.1401 3.86008L11.2267 3.77341C11.4867 3.51341 11.9067 3.51341 12.1667 3.77341C12.4267 4.03341 12.4267 4.45341 12.1667 4.71341L12.0801 4.80008C11.9534 4.92675 11.7867 4.99341 11.6134 4.99341ZM4.38675 4.99341C4.22008 4.99341 4.05341 4.92675 3.92675 4.80008L3.84008 4.71341C3.58008 4.45341 3.58008 4.03341 3.84008 3.77341C4.10008 3.51341 4.52008 3.51341 4.78008 3.77341L4.86675 3.86008C5.12675 4.12008 5.12675 4.54008 4.86675 4.80008C4.74008 4.92675 4.57342 4.99341 4.38675 4.99341Z"
                        fill="#969AA1"
                      />
                    </svg>
                  </span>

                  <span className="hidden dark:inline-block">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.9256 11.3764C15.9565 11.5763 14.9508 11.6227 13.9672 11.5124C10.281 11.0544 7.3904 8.06828 6.90217 4.35932C6.7868 3.43934 6.81378 2.48327 6.9844 1.55144C7.11333 0.794453 6.25794 0.253841 5.57309 0.640297C2.52438 2.35296 0.90791 6.00607 1.76569 9.47394C2.67004 13.1204 5.84413 15.828 9.60009 16.2736C12.8057 16.6553 15.883 15.3995 17.739 13.0408C18.2148 12.436 18.2148 11.8008 16.9256 11.3764Z"
                        fill="#969AA1"
                      />
                    </svg>
                  </span>
                </span>
              </label>
              {/* Dark Mode Toggler */}
            </li>
            <li>
              <div className="relative">
                <button
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark"
                  onClick={() =>
                    setNotificationDropdownOpen(!notificationDropdownOpen)
                  }
                >
                  <span className="absolute -top-0.5 right-0 z-1 h-2.5 w-2.5 rounded-full bg-meta-1"></span>
                  <svg
                    className="fill-black dark:fill-white"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0029 16.0027C17.9987 15.0652 17.6662 13.8984 17.6662 12.7069V10.0212C17.6662 7.6665 16.2762 5.6665 13.9929 5.10902V4.33317C13.9929 3.52367 13.3579 2.83317 12.4995 2.83317C11.6412 2.83317 11.0062 3.52367 11.0062 4.33317V5.10902C8.71454 5.6665 7.33337 7.65902 7.33337 10.0212V12.7069C7.33337 13.8984 7.00954 15.0652 6.00537 16.0027C5.6612 16.3084 5.33337 16.9165 5.33337 17.4997H19.6662C19.6662 16.9165 19.3384 16.3084 19.0029 16.0027Z"
                      fill=""
                    />
                    <path
                      d="M13.3183 19.3332C13.1224 19.7067 12.7349 19.9658 12.2661 19.9658C11.7974 19.9658 11.4099 19.7067 11.2149 19.3332H13.3183Z"
                      fill=""
                    />
                  </svg>
                </button>

                <div
                  className={`absolute right-0 mt-2 w-[280px] rounded border-[0.5px] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
                    !notificationDropdownOpen && "hidden"
                  }`}
                >
                  <div className="px-4.5 py-3">
                    <h5 className="text-bodydark2 mb-2.5 text-sm font-medium">
                      Notification
                    </h5>
                    <div className="flex items-center gap-3 py-3 hover:bg-gray-3 dark:hover:bg-meta-4">
                      <div className="h-12.5 w-12.5 rounded-full">
                        <img src="images/profile/user-02.png" alt="User" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium">Esther Howard</h6>
                        <p className="text-xs">Added new task</p>
                        <p className="text-xsm">25 May 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-3 hover:bg-gray-3 dark:hover:bg-meta-4">
                      <div className="h-12.5 w-12.5 rounded-full">
                        <img src="images/profile/user-03.png" alt="User" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium">Ralph Edwards</h6>
                        <p className="text-xs">Added new task</p>
                        <p className="text-xsm">25 May 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-3 hover:bg-gray-3 dark:hover:bg-meta-4">
                      <div className="h-12.5 w-12.5 rounded-full">
                        <img src="images/profile/user-04.png" alt="User" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium">Jenny Wilson</h6>
                        <p className="text-xs">Added new task</p>
                        <p className="text-xsm">25 May 2023</p>
                      </div>
                    </div>
                    <a
                      href="href"
                      className="btn btn-primary w-full rounded-md p-3 text-center"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative">
                <button
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark"
                  onClick={() => setChatDropdownOpen(!chatDropdownOpen)}
                >
                  <span className="absolute -top-0.5 right-0 z-1 h-2.5 w-2.5 rounded-full bg-meta-1"></span>
                  <svg
                    className="fill-black dark:fill-white"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 21.8332C17.0751 21.8332 22 17.344 22 11C22 4.65616 17.0751 0.166992 11 0.166992C4.92487 0.166992 0 4.65616 0 11C0 13.6777 1.17286 16.1268 3.17279 17.8432C2.8054 19.0917 2.23425 20.2904 1.67999 21.4304C1.5369 21.7421 1.6329 22.1128 1.90056 22.3204C2.15201 22.5117 2.51061 22.5268 2.77916 22.3547C6.05402 20.222 8.29163 20.6733 11 21.8332Z"
                      fill=""
                    />
                  </svg>
                </button>

                <div
                  className={`absolute right-0 mt-2 w-[280px] rounded border-[0.5px] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
                    !chatDropdownOpen && "hidden"
                  }`}
                >
                  <div className="px-4.5 py-3">
                    <h5 className="text-bodydark2 mb-2.5 text-sm font-medium">
                      Messages
                    </h5>
                    <div className="flex items-center gap-3 py-3 hover:bg-gray-3 dark:hover:bg-meta-4">
                      <div className="h-12.5 w-12.5 rounded-full">
                        <img src="images/profile/user-02.png" alt="User" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium">Esther Howard</h6>
                        <p className="text-xs">Added new task</p>
                        <p className="text-xsm">25 May 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-3 hover:bg-gray-3 dark:hover:bg-meta-4">
                      <div className="h-12.5 w-12.5 rounded-full">
                        <img src="images/profile/user-03.png" alt="User" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium">Ralph Edwards</h6>
                        <p className="text-xs">Added new task</p>
                        <p className="text-xsm">25 May 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-3 hover:bg-gray-3 dark:hover:bg-meta-4">
                      <div className="h-12.5 w-12.5 rounded-full">
                        <img src="images/profile/user-04.png" alt="User" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium">Jenny Wilson</h6>
                        <p className="text-xs">Added new task</p>
                        <p className="text-xsm">25 May 2023</p>
                      </div>
                    </div>
                    <a
                      href="href"
                      className="btn btn-primary w-full rounded-md p-3 text-center"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark"
            onClick={() => setNotifying(!notifying)}
          >
            <img
              src="images/profile/user.png"
              alt="User"
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
