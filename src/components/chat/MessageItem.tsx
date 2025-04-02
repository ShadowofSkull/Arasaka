import ReactMarkdown from "react-markdown";
import { ChatMessage } from "@/utils/geminiUtils";

interface MessageItemProps {
  message: ChatMessage;
}

export default function MessageItem({ message }: MessageItemProps) {
  return (
    <div
      className={`w-full max-w-full ${
        message.role === "user" ? "flex justify-end" : "flex justify-start"
      }`}
    >
      {/* Message bubble */}
      <div
        className={`rounded-2xl p-4 shadow-sm max-w-[85%] overflow-hidden ${
          message.role === "user"
            ? "bg-red-500 text-white"
            : "backdrop-blur-xl bg-white/60 dark:bg-zinc-800/40 border border-white/20 dark:border-zinc-700/30"
        }`}
      >
        {message.role === "assistant" && (
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Arasaka Assistant
            </h3>
          </div>
        )}
        {message.role === "user" ? (
          <p className="text-sm text-white break-words whitespace-pre-wrap">
            {message.content}
          </p>
        ) : (
          <div className="markdown-content text-sm text-zinc-800 dark:text-zinc-200 break-words">
            <ReactMarkdown
              components={{
                h1: ({ ...props }) => (
                  <h1 className="text-lg font-bold my-2" {...props} />
                ),
                h2: ({ ...props }) => (
                  <h2 className="text-md font-bold my-2" {...props} />
                ),
                h3: ({ ...props }) => (
                  <h3 className="text-base font-bold my-1" {...props} />
                ),
                h4: ({ ...props }) => (
                  <h4 className="text-sm font-bold my-1" {...props} />
                ),
                p: ({ ...props }) => <p className="my-1" {...props} />,
                ul: ({ ...props }) => (
                  <ul className="list-disc pl-5 my-2" {...props} />
                ),
                ol: ({ ...props }) => (
                  <ol className="list-decimal pl-5 my-2" {...props} />
                ),
                li: ({ ...props }) => (
                  <li className="my-0.5" {...props} />
                ),
                a: ({ ...props }) => (
                  <a className="text-red-500 hover:underline" {...props} />
                ),
                code: ({ inline, ...props }: { inline?: boolean } & React.HTMLProps<HTMLElement>) =>
                  inline ? (
                    <code
                      className="bg-zinc-100 dark:bg-zinc-700 px-1 py-0.5 rounded text-red-500 dark:text-red-300 text-xs"
                      {...props}
                    />
                  ) : (
                    <code
                      className="block bg-zinc-100 dark:bg-zinc-700 p-2 rounded text-red-500 dark:text-red-300 text-xs my-2 overflow-x-auto"
                      {...props}
                    />
                  ),
                pre: ({ ...props }) => (
                  <pre
                    className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded my-2 overflow-x-auto"
                    {...props}
                  />
                ),
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-red-300 dark:border-red-700 pl-3 my-2 text-zinc-600 dark:text-zinc-400 italic"
                    {...props}
                  />
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
