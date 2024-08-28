"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./Chatbox";
import Profile from "./Profile";
import Link from "next/link";
import { mockData } from "../data/mockData";
import Hamburger from "./Hamburger";



const Layout: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>(1);
  const users = mockData.users;

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const user = mockData.users.find((user) => user.id === selectedUserId);
  if (!user) return null;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
  };

  const hamClick = (userId: number) => {
    toggleSidebar();
    handleUserClick(userId);
  };

  return (
    <div>
      <div className="relative w-full max-h-screen overflow-y-hidden">
        <div className="flex flex-col max-w-vw ">
          <div className="bg-[#0d6efd] flex min-h-[17vh]"></div>
          <div className="bg-[#98ccfd] min-h-[83vh] opacity-20"></div>
        </div>
      </div>
      <div className="min-w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:min-w-[85vw] min-h-full">
        <div className="">
          <div className="hidden sm:block">
            <div className="flex justify-between items-center my-3 min-h-[6vh]">
              <div className="flex opacity-75 text-white space-x-2">
                <div className="">
                  <Link href="https://www.instagram.com/believer._69/">
                    <svg
                      className="hover:scale-105 duration-300"
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="#fff"
                      />
                      <path
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                        fill="#fff"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="https://github.com/Codeforme1234">
                    <svg
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="hover:scale-105 duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485V15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545V6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493V3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418V4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653V4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469V3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723V6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015V15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="https://www.linkedin.com/in/deveshtiwarii/">
                    <svg
                      width="34px"
                      height="34px"
                      className="hover:scale-105 duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                        fill="#fff"
                      />
                      <path
                        d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                        fill="#fff"
                      />
                      <path
                        d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                        fill="#fff"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <Link className="hover:scale-105 duration-150" href="https://drive.google.com/file/d/1AGU5wOCRBkU04tRP0evLdgDNJWKAigHn/view?usp=sharing">
                <div className="flex justify-center items-center">
                  <div className="text-white text-sm font-normal bg-blue-500 p-2 rounded-lg">
                    Get my Resume link
                  </div>
                  <div className="">
                    <img
                      src={
                        "https://media.superdm.me/images/profile/90a4797b1db0be1798c/yrl045h.jpeg"
                      }
                      alt="Profile"
                      className="w-10 h-10 ml-2 rounded-full"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="items-center my-3 min-h-[5vh] relative">
              <div className="flex ms-2 pt-1 items-center">
                <div className="relative z-50">
                  <Hamburger isOpen={isSidebarOpen} onClick={toggleSidebar} />
                </div>
                <div className="ms-2 text-white font-medium">{user.name}</div>
              </div>

              {isSidebarOpen && (
                <div className="fixed inset-0 mt-[10vh] space-y-3 border-r bg-white transition-transform duration-300 ease-in-out z-40">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className={`flex ${
                        user.id === 1 ? "hidden" : ""
                      } space-y-2 items-center space-x-2 cursor-pointer p-2 ${
                        selectedUserId === user.id ? "bg-gray-200" : ""
                      }`}
                      onClick={() => hamClick(user.id)}
                    >
                      <div>
                        <div className="w-1 h-1 rounded-full bg-black mx-3"></div>
                      </div>
                      <div>
                        <div className="text-xs font-medium">{user.name}</div>
                        <div className="text-[0.7rem] mt-1 opacity-70">
                          {user.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex bg-white lg:rounded-2xl min-h-[90vh]">
            <div className=" hidden sm:block sm:w-2/5 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
              <Sidebar onSelectUser={setSelectedUserId} />
            </div>
            <div className=" sm:w-3/5 lg:w-2/4 xl:w-2/4 2xl:w-2/4">
              <ChatBox userId={selectedUserId} />
            </div>
            <div className=" hidden xl:block lg:block 2xl:block lg:w-1/4 xl:w-1/4 2xl:w-1/4  z-0">
              <Profile userId={selectedUserId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
