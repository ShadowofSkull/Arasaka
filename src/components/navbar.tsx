"use client";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="row-[1/2] p-10 flex justify-between items-center h-10 bg-white">
      <button onClick={() => console.log("sidebar button clicked")}>
        <Image
          src={"/sidebar icon.svg"}
          alt="sidebar icon"
          width={25}
          height={25}
        />
      </button>
      <header className="h-10 text-3xl">Arasaka</header>

      <button onClick={() => console.log("acc button clicked")}>
        <Image
          src={"/account icon.svg"}
          alt="account icon"
          width={30}
          height={30}
        />
      </button>
    </nav>
  );
}
