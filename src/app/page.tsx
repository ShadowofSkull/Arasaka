import Navbar from "@/components/Navbar";
import Query from "@/components/QueryBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-white font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-0 w-full overflow-hidden">
        <div id="hero" className="w-full py-16 md:py-24 space-y-6 relative px-4 sm:px-6 lg:px-8">
          {/* Decorative blurred circle */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-300 dark:bg-red-700 rounded-full filter blur-3xl opacity-20 dark:opacity-10 z-0"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-center relative z-10">
            Welcome to <span className="text-red-500 dark:text-red-400">Arasaka</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-center relative z-10">
            A Place to Get the Exact Parts You Need
          </h2>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-8"></div>
        </div>

        <div className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/60 dark:bg-zinc-800/40 rounded-3xl shadow-lg p-6 md:p-8 border border-white/20 dark:border-zinc-700/30 relative z-10 overflow-hidden mb-12 mx-4 sm:mx-6 lg:mx-8">
          {/* Subtle glow effect */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-300 dark:bg-red-700 rounded-full filter blur-3xl opacity-10 dark:opacity-10 z-0"></div>
          <Query />
        </div>
      </main>

      <footer className="mt-auto py-6 px-4 border-t border-zinc-200/50 dark:border-zinc-800/50 text-xs text-zinc-500 dark:text-zinc-400 text-center backdrop-blur-sm bg-white/30 dark:bg-zinc-900/30 w-full">
        <p>Copyright &copy; Arasaka {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}