import React from "react";
import ChatHistoryItem from "./ChatHistoryItem";
import { chatHistory } from "../../data/chatHistoryData";

interface ChatSidebarProps {
  onClose: () => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-40 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Sidebar panel */}
      <div className="relative flex-1 flex flex-col max-w-xs w-full h-full bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-white">
            Chat History
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400"
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Custom styled scrollable area */}
        <div className="flex-1 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-zinc-100 dark:scrollbar-thumb-red-600 dark:scrollbar-track-zinc-800">
          <div className="p-4 h-full">
            <ul className="space-y-2">
              {chatHistory.map((chat) => (
                <ChatHistoryItem
                  key={chat.id}
                  id={chat.id}
                  title={chat.title}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* New Chat button - fixed at bottom */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
            <svg
              className="mr-2 -ml-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            New Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
