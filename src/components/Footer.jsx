// src/components/Footer.jsx
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-850/80 bg-black mt-auto py-8 text-sm text-zinc-500">
      <div className="w-full px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Sisi Kiri: Copyright & Status */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center sm:text-left">
          <span className="text-zinc-400 font-medium hover:text-white transition-colors duration-300">
            &copy; {currentYear} Julius Sebastian Wuwung.
          </span>
          <span className="hidden sm:inline text-zinc-700">&bull;</span>
          <span className="text-zinc-500 text-xs">All rights reserved.</span>
        </div>

        {/* Sisi Kanan: Quick Social Links dengan Micro-Hover Animation */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/juliuswuwung/"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-zinc-400 hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            LinkedIn
          </a>
          <span className="text-zinc-800">&bull;</span>
          <a
            href="https://www.instagram.com/julius.sw/?hl=id"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-zinc-400 hover:text-pink-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            Instagram
          </a>
          <span className="text-zinc-800">&bull;</span>
          <a
            href="https://github.com/Jukius30"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-zinc-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;