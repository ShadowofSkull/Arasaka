"use client";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="m-6 flex justify-between items-center h-10">
      <button onClick={() => console.log("sidebar button clicked")}>
        <Image
          src={"/sidebar icon.svg"}
          alt="sidebar icon"
          width={35}
          height={35}
        />
      </button>
      <header className="h-10 text-4xl">Arasaka</header>

      <button onClick={() => console.log("acc button clicked")}>
        <Image
          src={"/account icon.svg"}
          alt="account icon"
          width={40}
          height={40}
        />
      </button>
    </nav>
  );
}
