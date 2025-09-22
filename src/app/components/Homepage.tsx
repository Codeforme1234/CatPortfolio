"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./Chatbox";
import Profile from "./Profile";
import Link from "next/link";
import { mockData } from "../data/mockData";
import Hamburger from "./Hamburger";
import { Profile as ProfileImg } from "../../../public/images";

const Layout: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>(1);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const users = mockData.users;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  const user = mockData.users.find((user) => user.id === selectedUserId);
  if (!user) return null;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
    setSelectedCompanyId(null); // Reset company selection when switching users
  };

  const handleCompanyClick = (companyId: string) => {
    setSelectedCompanyId(companyId);
  };

  const handleResetCompany = () => {
    setSelectedCompanyId(null);
  };

  const hamClick = (userId: number) => {
    toggleSidebar();
    handleUserClick(userId);
    handleResetCompany(); // Reset company selection when clicking mobile navigation
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <div className="relative w-full">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce-gentle"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300/20 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content Container */}
      <div className="z-10 min-w-full h-full flex flex-col xl:max-w-[90vw]">
        <div className="px-4 sm:px-6 lg:px-8 h-full flex flex-col">
          
          {/* Desktop Header */}
          <div className="hidden sm:block flex-shrink-0">
            <div className="flex justify-between items-center py-4">
              {/* Social Links */}
              <div className="flex space-x-4">
                <Link 
                  href="https://www.instagram.com/believer._69/"
                  className="group p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 group-hover:text-pink-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                
                <Link 
                  href="https://github.com/Codeforme1234"
                  className="group p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 group-hover:text-blue-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
                
                <Link 
                  href="https://www.linkedin.com/in/deveshtiwarii/"
                  className="group p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 group-hover:text-blue-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>

              {/* Resume Button */}
              <Link 
                href="https://drive.google.com/file/d/1QuNfLYaurTjym7dGKI67PpR9LDY5ODNW/view?usp=sharing"
                className="group flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-gradient gradient-text text-sm font-medium group-hover:text-blue-100 transition-colors">
                  Download Resume
                </div>
                <div className="relative">
                  <img
                    src={ProfileImg.src}
                    alt="Profile"
                    className="w-10 h-10 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden flex-shrink-0">
            <div className="flex items-center justify-between pt-8 pb-4">
              <div className="flex items-center space-x-3">
                <div className="relative z-50">
                  <Hamburger isOpen={isSidebarOpen} onClick={toggleSidebar} />
                </div>
                <div className="text-white font-semibold text-lg">{user.name}</div>
              </div>
              
              <Link 
                href="https://drive.google.com/file/d/1bw8as4FFdwmXoU5svHbS1Nj5UxVt1WFx/view?usp=sharing"
                className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 text-white text-sm font-medium hover:bg-white/20 transition-all"
              >
                Resume
              </Link>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
              <div className="fixed inset-0 mt-[12vh] bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40">
                <div className="p-4 space-y-2">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className={`flex ${
                        user.id === 1 ? "hidden" : ""
                      } items-center space-x-3 cursor-pointer p-3 rounded-xl transition-all ${
                        selectedUserId === user.id 
                          ? "bg-blue-50 border border-blue-200" 
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => hamClick(user.id)}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{user.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="flex bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 flex-1 overflow-hidden">
            {/* Desktop Sidebar */}
            <div className="hidden sm:block sm:w-2/5 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
              <Sidebar onSelectUser={setSelectedUserId} onResetCompany={handleResetCompany} />
            </div>
            
            {/* Chat Area */}
            <div className="sm:w-3/5 lg:w-2/4 xl:w-2/4 2xl:w-2/4">
              <ChatBox userId={selectedUserId} companyId={selectedCompanyId} />
            </div>
            
            {/* Profile Section */} 
            <div className="hidden xl:block lg:block 2xl:block lg:w-1/4 xl:w-1/4 2xl:w-1/4">
              <Profile userId={selectedUserId} onCompanyClick={handleCompanyClick} selectedCompanyId={selectedCompanyId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
