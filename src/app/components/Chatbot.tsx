"use client";
// components/ChatbotIframe.tsx
import { useEffect } from "react";

const ChatbotIframe: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "IfK60MeHhs76iOI9Wt96D");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/IfK60MeHhs76iOI9Wt96D"
      width="100%"
      style={{ height: "100%", minHeight: "700px" }}
    ></iframe>
  );
};

export default ChatbotIframe;
