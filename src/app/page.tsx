import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh text-center">
      <NavBar/>
      <main>
        <div className="bg-red-500 ">test</div>
      </main>
      <footer className="h-10 bg-amber-300 mt-auto">
        &copy;Copyright Arasaka 2025
      </footer>
    </div>
  );
}
