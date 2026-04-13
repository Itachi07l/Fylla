import React from "react";

function Navbar() {
  return (
    <header className="w-full bg-[#f5f3ef] border-b border-slate-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 border border-black" />
            <div className="absolute inset-1 border border-black" />
            <div className="absolute inset-2 bg-black w-2 h-2" />
          </div>
          <span className="text-lg tracking-widest font-medium">FYLLA</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-slate-700">
          <a href="#" className="hover:text-black transition">SERVICES</a>
          <a href="#" className="hover:text-black transition">WORK</a>
          <a href="#" className="hover:text-black transition">STUDIO</a>
          <a href="#" className="hover:text-black transition">BLOG</a>
          <a href="#" className="hover:text-black transition">PAGES ▾</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-slate-800 transition">
            LET'S TALK
          </button>

          {/* Language */}
          <div className="hidden md:flex items-center gap-2">
            {["IN", "PI", "TW"].map((lang) => (
              <span
                key={lang}
                className="w-9 h-9 flex items-center justify-center border border-slate-400 rounded-full text-xs hover:bg-black hover:text-white transition"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="w-12 h-7 border border-slate-400 rounded-full flex items-center px-1 cursor-pointer">
            <div className="w-5 h-5 bg-black rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
1