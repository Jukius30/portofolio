// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 md:py-24 max-w-4xl mx-auto space-y-6">
      <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-950/40 rounded-full border border-blue-800/60">
        Available for work
      </span>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
        Hi, I&apos;m <span className="text-blue-500">Julius Sebastian Wuwung</span>
      </h1>

      <p className="text-xl md:text-2xl font-medium text-zinc-300">
        Full Stack Developer
      </p>

      <p className="max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed">
        Passionate about crafting scalable backend architectures, clean APIs, and modern, high-performance web applications.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to="/portfolio"
          className="px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition shadow-sm"
        >
          View Projects
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 rounded-lg border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-zinc-700 hover:text-white transition bg-zinc-950"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}

export default Home;