import React from "react";
import Link from "next/link";

interface ChatHistoryItemProps {
  id: number;
  title: string;
}

const ChatHistoryItem: React.FC<ChatHistoryItemProps> = ({ id, title }) => {
  return (
    <li className="transform transition-transform duration-200 hover:scale-102">
      <Link
        href={`/chat/${id}`}
        className="block p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-200"
      >
        <div className="flex items-center">
          <svg
            className="mr-3 h-5 w-5 text-zinc-500 dark:text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <span className="truncate font-medium">{title}</span>
        </div>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Last updated: today
        </p>
      </Link>
    </li>
  );
};

export default ChatHistoryItem;
