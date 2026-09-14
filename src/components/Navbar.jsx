// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-blue-500 font-semibold' : 'text-zinc-400 hover:text-zinc-100'
    }`;

  return (
    <header className="border-b border-zinc-800/80 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="w-full h-16 flex items-center justify-center">
        <div className="flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;