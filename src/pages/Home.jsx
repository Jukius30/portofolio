// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 md:py-28 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
      {/* Efek Pendar Halus yang Bernapas di Background */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600 blur-[130px] rounded-full pointer-events-none -z-10 animate-glow-slow"
      />

      {/* Badge Status Kerja dengan Pulse Dot */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-950/40 rounded-full border border-blue-800/60 transition-transform duration-300 hover:scale-105">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Available for work
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
        Hi, I&apos;m{" "}
        <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
          Julius Sebastian Wuwung
        </span>
      </h1>

      {/* Role / Subtitle */}
      <p className="text-xl md:text-2xl font-medium text-zinc-300">
        Full Stack Developer
      </p>

      {/* Deskripsi */}
      <p className="max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed">
        Passionate about crafting scalable backend architectures, clean APIs,
        and modern, high-performance web applications.
      </p>

      {/* Tombol Aksi */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to="/portfolio"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold 
               shadow-[0_0_20px_rgba(37,99,235,0.55)] 
               hover:shadow-[0_0_35px_rgba(59,130,246,0.9)] 
               hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          View Projects
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 rounded-xl border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-zinc-600 hover:text-white hover:bg-zinc-900/60 hover:scale-105 active:scale-95 transition-all duration-300 bg-zinc-950/60 backdrop-blur-sm"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}

export default Home;