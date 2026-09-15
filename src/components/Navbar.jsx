// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'text-blue-400 font-semibold shadow-[0_0_12px_rgba(96,165,250,0.35)]'
        : 'text-zinc-400 hover:text-zinc-100 hover:-translate-y-0.5'
    }`;

  return (
    <header className="border-b border-zinc-850/80 bg-black/75 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="w-full h-16 flex items-center justify-center">
        <div className="flex items-center gap-1 sm:gap-2 p-1 rounded-full border border-zinc-800/80 bg-zinc-950/60 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full ${navLinkClass({ isActive })} ${
                isActive ? 'bg-blue-950/40 border border-blue-800/50' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full ${navLinkClass({ isActive })} ${
                isActive ? 'bg-blue-950/40 border border-blue-800/50' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full ${navLinkClass({ isActive })} ${
                isActive ? 'bg-blue-950/40 border border-blue-800/50' : ''
              }`
            }
          >
            Portfolio
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;