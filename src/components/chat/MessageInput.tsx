import Form from "next/form";

interface MessageInputProps {
  text: string;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (formData: FormData) => Promise<void>;
}

export default function MessageInput({
  text,
  isLoading,
  onChange,
  onSubmit,
}: MessageInputProps) {
  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-4 w-full rounded-b-xl">
      <Form action={onSubmit} className="flex gap-2 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <textarea
            value={text}
            onChange={onChange}
            id="query"
            name="query"
            placeholder="Ask about parts or products..."
            className="w-full p-3 pr-10 rounded-xl bg-white/80 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 placeholder-zinc-400 dark:placeholder-zinc-500 resize-none drop-shadow-sm focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/20 transition-all duration-300 min-h-[60px] max-h-[120px] overflow-y-auto backdrop-blur-md"
            maxLength={500}
            rows={1}
          />
          <div className="absolute bottom-2 right-3 text-xs text-zinc-400 dark:text-zinc-500">
            {text.length}/500
          </div>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium p-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none h-[60px] min-w-[60px] flex items-center justify-center"
          disabled={isLoading || !text.trim()}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          )}
        </button>
      </Form>
    </div>
  );
}
