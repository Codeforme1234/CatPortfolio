// Sidebar.tsx
import React, { useState } from "react";
import { mockData, blogLinks } from "../data/mockData";
import ChatbotIframe from "./Chatbot";
import Hamburger from "./Hamburger";
import Image from "next/image";

interface SidebarProps {
  onSelectUser: (userId: number) => void;
  onResetCompany?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectUser, onResetCompany }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const users = mockData.users;

  // Helper function to get platform icon
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'medium':
        return '/medium-svgrepo-com.svg';
      case 'linkedin':
        return '/linkedin-svgrepo-com.svg';
      default:
        return null;
    }
  };

  // Helper function to get platform color
  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'medium':
        return 'bg-green-500';
      case 'linkedin':
        return 'bg-blue-500';
      case 'github':
        return 'bg-gray-500';
      case 'devto':
        return 'bg-purple-500';
      default:
        return 'bg-gray-400';
    }
  };

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
    onSelectUser(userId);
    // Reset company selection when switching to a navigation item
    if (onResetCompany) {
      onResetCompany();
    }
  };

  return (
    <div className="p-6 overflow-y-auto space-y-2 border-r border-gray-100">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Navigation</h2>
        <p className="text-sm text-gray-500">Explore different sections of my portfolio</p>
      </div>
      
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex ${
            user.id == 1 ? "hidden" : null
          } items-center space-x-4 cursor-pointer p-4 rounded-xl transition-all duration-200 group ${
            selectedUserId === user.id 
              ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm" 
              : "hover:bg-gray-50 hover:shadow-sm"
          }`}
          onClick={() => handleUserClick(user.id)}
        >
          <div className={`w-3 h-3 rounded-full transition-all duration-200 ${
            selectedUserId === user.id 
              ? "bg-blue-500 scale-125" 
              : "bg-gray-300 group-hover:bg-gray-400"
          }`}></div>
          <div className="flex-1">
            <div className={`text-sm font-medium transition-colors ${
              selectedUserId === user.id ? "text-blue-900" : "text-gray-900"
            }`}>
              {user.name}
            </div>
            <div className={`text-xs mt-1 transition-colors ${
              selectedUserId === user.id ? "text-blue-600" : "text-gray-500"
            }`}>
              {user.role}
            </div>
          </div>
          {selectedUserId === user.id && (
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          )}
        </div>
      ))}
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="text-xs text-gray-400 mb-3">Blogs & Links</div>
        <div className="space-y-2">
          {blogLinks.map((blog) => (
            <a 
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all group"
            >
              {getPlatformIcon(blog.platform) ? (
                <div className="w-4 h-4 flex items-center justify-center">
                  <Image
                    src={getPlatformIcon(blog.platform)!}
                    alt={`${blog.platform} icon`}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              ) : (
                <div className={`w-2 h-2 ${getPlatformColor(blog.platform)} rounded-full`}></div>
              )}
              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="text-xs text-gray-600 mb-3 border-b border-gray-400 "></div>
        <a
          href="https://calendar.app.google/hyLDBphukosXcds47"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">Book a Meeting</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
  
      
      
      
      
      
      
      
      
      
      
      
      
      
  