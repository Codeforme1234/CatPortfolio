import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import socket from "../lib/socket";
import Link from "next/link";
import { mockData } from "../data/mockData";
import TypewriterText from "./TypeWriter"; // Import the new component

interface ChatBoxProps {
  userId: number;
}

const ChatBox: React.FC<ChatBoxProps> = ({ userId }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    { sender: string; message: string | { line: string }[] }[]
  >([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const user = mockData.users.find((user) => user.id === userId);
    if (user) {
      setMessages(user.chats);
      scrollToBottom();
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
  }, [userId, selectedLanguage]);

  const sendMessage = async () => {
    if (message) {
      mockData.addMessage(userId, "You", message);
      setMessages(mockData.users.find((user) => user.id === userId)!.chats);
      socket.emit("message", message);
      setMessage("");
      scrollToBottom();
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
          if (typeof chat.message === "string") {
            const translatedMessage = await translateMessage(
              chat.message,
              language
            );
            return { ...chat, message: translatedMessage };
          }
          return chat;
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

  const user = mockData.users.find((user) => user.id === userId);
  if (!user) return null;

  return (
    <div className="flex flex-col h-full">
      <div className="hidden sm:block">
        <div className="min-h-[6vh] px-3 text-[0.85rem] font-medium border-b-2 border-neutral-100 flex justify-between items-center">
          <div className="my-4">{user.name}</div>
        </div>
      </div>
      <div
        className="flex-1 justify-between p-4 overflow-y-auto "
        ref={chatContainerRef}
      >
        <div className="space-y-4 flex flex-col">
          {messages.map((chat, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl ${
                chat.sender === "You"
                  ? "self-end bg-blue-100 text-left max-w-[90%]"
                  : "self-start bg-gray-50 max-w-[90%] text-left"
              }`}
            >
              {typeof chat.message === "string" ? (
                <div className="text-[0.83rem] opacity-95">
                  {/* <TypewriterText text={chat.message} /> */}
                  {chat.message}
                </div>
              ) : (
                chat.message.map((line, lineIndex) => (
                  <div key={lineIndex} className="text-[0.83rem] opacity-95">
                    {/* <TypewriterText text={line.line} /> */}
                    {line.line}
                    {/* <div>snafj</div> */}
                    <div className="mt-3"></div>
                  </div>
                ))
              )}
            </div>
          ))}
          {user.id === 5 && (
            <button className="text-[0.83rem] self-end bg-blue-100 text-left max-w-[90%] p-3 hover:scale-105 duration-150 border-blue-100 rounded-xl opacity-95">
              <Link href="https://excalidraw.com/#json=A3so6hTwAuZlnU5N7cwpg,Nvnabl3CXPTjFWsPCGgNdA">
                Click Here
              </Link>
            </button>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div
        className={`px-5 py-2 mb-3 ${
          user.id === 4 ? "hidden" : ""
        } border-gray-100 flex w-full`}
      >
        <div className="bg-gray-100 flex items-center align-center justify-between rounded-xl min-w-[90%] font-light text-sm">
          <input
            type="text"
            value={message}
            placeholder="This is my application to be a frontend dev at your company.."
            onChange={(e) => setMessage(e.target.value)}
            className="min-w-[90%] p-3 border-none outline-none bg-gray-100 flex-1"
          />
          <div className="flex items-center justify-center min-w-[10%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#5F7082"
                d="M19.656 11.47a.748.748 0 0 1 0 1.06l-7.692 7.688a5.25 5.25 0 0 1-7.426-7.426l9.306-9.442a3.75 3.75 0 1 1 5.307 5.301l-9.307 9.443a2.254 2.254 0 1 1-3.188-3.188l7.81-7.933a.75.75 0 1 1 1.068 1.052l-7.81 7.941a.751.751 0 0 0 1.057 1.066l9.306-9.438a2.251 2.251 0 1 0-3.18-3.188l-9.304 9.439a3.75 3.75 0 0 0 5.3 5.308l7.692-7.687a.75.75 0 0 1 1.06.003Z"
              ></path>
            </svg>
          </div>
        </div>
        <button
          onClick={sendMessage}
          className="bg-gray-100 min-w-[10%] flex items-center rounded-lg justify-center text-white p-2 ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#9EA4AE"
              d="M21.997 11.998a1.5 1.5 0 0 1-.755 1.307l-15.75 8.99a1.5 1.5 0 0 1-2.152-1.804l2.563-7.494a.375.375 0 0 1 .355-.254h6.742a.75.75 0 0 0 .75-.8.767.767 0 0 0-.774-.7H7.512a.375.375 0 0 1-.355-.253l-2.573-7.5a1.5 1.5 0 0 1 2.149-1.803l15.75 8.99a1.5 1.5 0 0 1 .764 1.306Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
