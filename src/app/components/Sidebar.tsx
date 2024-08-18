// Sidebar.tsx
import React, { useState } from "react";
import { mockData } from "../data/mockData";
import ChatbotIframe from "./Chatbot";
import Hamburger from "./Hamburger";

interface SidebarProps {
  onSelectUser: (userId: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectUser }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const users = mockData.users;

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
    onSelectUser(userId);
  };

  return (
    <div className="pt-4  overflow-y-auto space-y-3 border-r">
      
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex ${
            user.id == 1 ? "hidden" : null
          } space-y-2 items-center space-x-2 cursor-pointer p-2 ${
            selectedUserId === user.id ? "bg-gray-0" : ""
          }`}
          onClick={() => handleUserClick(user.id)}
        >
          <div>
            <div className="w-1 h-1 rounded-full bg-black mx-3"></div>
          </div>
          <div>
            <div className="text-xs font-medium">{user.name}</div>
            <div className="text-[0.7rem] mt-1 opacity-70">{user.role}</div>
          </div>
        </div>
      ))}
      <div className="hidden">
        <ChatbotIframe />
      </div>
    </div>
  );
};

export default Sidebar;
  