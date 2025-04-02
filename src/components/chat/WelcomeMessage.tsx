export default function WelcomeMessage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center space-y-4 max-w-md px-4">
        <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
          How can I assist you today?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Ask any PC related questions or request product recommendations.
        </p>
      </div>
    </div>
  );
}
