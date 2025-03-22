import Query from "@/components/query";
import NavBar from "../components/navbar";


export default function Home() {
  return (
    <div className="grid grid-rows-5 min-h-dvh h-dvh w-dvw text-center ">
      <NavBar/>
      <main className="p-10 row-[2/5]">
        <div id="hero">
          <h1 className="text-3xl">Welcome to Arasaka</h1>
          <h2 className="text-2xl">A Place to Get the Exact Parts You Need</h2>
        </div>
        <Query />
      </main>
      <footer className="text-xs p-2 h-10 bg-gray-300 row-[5/6] mt-auto">
        Copyright&copy; Arasaka 2025
      </footer>
    </div>
  );
}
