import Navbar from "@/components/Navbar";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-white font-sans overflow-x-hidden w-full">
      {/* Fixed navbar at the top */}
      <Navbar />

      {/* Scroll snap container */}
      <div className="snap-container scrollbar-thin">
        {/* Hero section - full viewport height */}
        <section
          id="hero"
          className="snap-section w-full flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8"
        >
          {/* Decorative blurred circle */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-300 dark:bg-red-700 rounded-full filter blur-3xl opacity-20 dark:opacity-10 z-[var(--zindex-bg)]"></div>

          <div className="w-full max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-center relative z-[var(--zindex-fg)]">
              Welcome to{" "}
              <span className="text-red-500 dark:text-red-400">Arasaka</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-center relative z-[var(--zindex-fg)]">
              A Place to Get the Perfect PC
            </h2>

            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-8"></div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <a
                href="#query-section"
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Query section */}
        <section
          id="query-section"
          className="snap-section w-full flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-2xl backdrop-blur-xl bg-white/60 dark:bg-zinc-800/40 rounded-3xl shadow-lg p-4 md:p-8 border border-white/20 dark:border-zinc-700/30 relative z-[var(--zindex-fg)] overflow-hidden mx-auto mt-15">
            {/* Subtle glow effect */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-300 dark:bg-red-700 rounded-full filter blur-3xl opacity-10 dark:opacity-10 z-[var(--zindex-bg)]"></div>
            <Chat />
          </div>
        </section>

        {/* Footer - appears at the bottom of content */}
        <footer className=" py-4 px-4 border-t border-zinc-200/50 dark:border-zinc-800/50 text-xs text-zinc-500 dark:text-zinc-400 text-center backdrop-blur-sm bg-white/30 dark:bg-zinc-900/30 w-full">
          <p>Copyright &copy; Arasaka {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
