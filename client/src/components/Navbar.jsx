import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-700/80 dark:bg-slate-900/80 flex justify-between items-center px-8 py-4 w-full max-w-full">
      <div className="text-2xl font-bold tracking-tighter text-white dark:text-slate-100">Warm Explorer</div>
      <div className="hidden md:flex items-center gap-8">
        <Link 
          to="/" 
          className={`font-bold pb-1 transition-colors ${isActive('/') ? 'text-orange-400 border-b-2 border-orange-400' : 'text-slate-200 hover:text-white'}`}
        >
          Home
        </Link>
        <Link 
          to="/destinations" 
          className={`font-bold pb-1 transition-colors ${isActive('/destinations') ? 'text-orange-400 border-b-2 border-orange-400' : 'text-slate-200 hover:text-white'}`}
        >
          Destinations
        </Link>
        <Link to="/experiences" className={`font-bold pb-1 transition-colors ${isActive('/experiences') ? 'text-orange-400 border-b-2 border-orange-400' : 'text-slate-200 hover:text-white'}`}>
          Experiences
        </Link>
        <Link to="/journal" className={`font-bold pb-1 transition-colors ${isActive('/journal') ? 'text-orange-400 border-b-2 border-orange-400' : 'text-slate-200 hover:text-white'}`}>
          Journal
        </Link>
        <Link to="/stays" className={`font-bold pb-1 transition-colors ${isActive('/stays') ? 'text-orange-400 border-b-2 border-orange-400' : 'text-slate-200 hover:text-white'}`}>
          Stays
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <input
            className="bg-white/10 text-white rounded-full px-4 py-1.5 focus:outline-none border border-white/20 w-48 text-sm"
            placeholder="Search..."
            type="text"
          />
        </div>
        <button className="p-2 text-orange-400 hover:bg-white/10 rounded-full transition-all duration-300">
          <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;