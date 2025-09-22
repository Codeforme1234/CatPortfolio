import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import socket from "../lib/socket";
import Link from "next/link";
import { mockData, companyChatData, profileData } from "../data/mockData";
import TypewriterText from "./TypeWriter";
import Image from "next/image";

interface ChatBoxProps {
  userId: number;
  companyId?: string | null;
}

const ChatBox: React.FC<ChatBoxProps> = ({ userId, companyId }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (companyId) {
      // Show company-specific content
      const companyChats = companyChatData[companyId as keyof typeof companyChatData] || [];
      setMessages(companyChats);
      scrollToBottom();
    } else {
      // Show regular user content
      const user = mockData.users.find((user) => user.id === userId);
      if (user) {
        setMessages(user.chats);
        scrollToBottom();
      }
    }

    socket.on("message", async (msg: string) => {
      const translatedMessage = await translateMessage(msg, selectedLanguage);
      mockData.addMessage(userId, "Other User", translatedMessage);
      setMessages(mockData.users.find((user) => user.id === userId)!.chats);
      scrollToBottom();
    });

    return () => {
      socket.off("message");
    };
  }, [userId, selectedLanguage, companyId]);

  const sendMessage = async () => {
    if (message.trim()) {
      mockData.addMessage(userId, "You", message);
      setMessages(mockData.users.find((user) => user.id === userId)!.chats);
      socket.emit("message", message);
      setMessage("");
      scrollToBottom();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLanguageChange = async (language: string) => {
    setSelectedLanguage(language);
    const user = mockData.users.find((user) => user.id === userId);
    if (user) {
      const translatedMessages = await Promise.all(
        user.chats.map(async (chat) => {
          const translatedMessage = await translateMessage(
            chat.message,
            language
          );
          return { ...chat, message: translatedMessage };
        })
      );
      setMessages(translatedMessages);
    }
  };

  const translateMessage = async (
    text: string,
    target: string
  ): Promise<string> => {
    try {
      const response = await axios.post("/api/translate", {
        text,
        targetLanguage: target,
      });
      return response.data.translatedText;
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  };

  // Function to detect URLs in text and convert them to clickable links
  const detectAndRenderLinks = (text: string, isUser: boolean = false) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline transition-colors duration-200 ${
              isUser 
                ? "text-blue-200 hover:text-white" 
                : "text-blue-600 hover:text-blue-800"
            }`}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const user = mockData.users.find((user) => user.id === userId);
  if (!user) return null;

  function getCompanyInfo(companyId: string) {
    return companyId ? profileData.experience.find((experience) => experience.companyId === companyId) : null;
}

  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-white flex flex-col overflow-hidden">
      {/* Chat Header */}
      <div className="hidden sm:block flex-shrink-0">
        <div className="px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            
              <div className="flex items-center space-x-3">
              {getCompanyInfo(companyId)?.img && ( <Image src={companyId ? getCompanyInfo(companyId)?.img : ""} alt="Profile" width={40} height={40} className="rounded-full" />)}
                <div>
                  <div className="font-semibold text-gray-900">
                    {companyId ? getCompanyInfo(companyId)?.position : user.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {companyId ? getCompanyInfo(companyId)?.company : user.role}
                  </div>
                </div>
              </div>
            
            
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500">
                {companyId ? 'Experience' : 'Online'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div
        className="flex-1 overflow-y-auto"
        ref={chatContainerRef}
      >
        <div className="p-4 space-y-4">
          {messages.map((chat, index) => {
            // Extract username from sender (remove $$ prefix)
            const username = chat.sender.startsWith('$$') ? chat.sender.substring(2) : chat.sender;
            const isUser = username === "You";
            
            return (
              <div
                key={index}
                className={`flex ${
                  isUser ? "justify-end" : "justify-start"
                } animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                    isUser
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "bg-white border border-gray-100 text-gray-800"
                  }`}
                >
                  <div className="text-sm leading-relaxed whitespace-pre-line">
                    {detectAndRenderLinks(chat.message, isUser)}
                  </div>
                </div>
              </div>
            );
          })}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div
        className={`px-6 py-4 bg-white border-t border-gray-100 flex-shrink-0 ${
          user.id === 4 ? "hidden" : ""
        }`}
      >
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              placeholder={companyId ? "Ask about this company experience..." : "Type your message here..."}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
          </div>
          
          <button
            onClick={sendMessage}
            disabled={!message.trim()}
            className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
        
        <div className="mt-2 text-xs text-gray-400 text-center">
          Press Enter to send • Shift + Enter for new line
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
