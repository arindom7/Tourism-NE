import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-100 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
        <div>
          <div className="text-lg font-bold text-slate-100 mb-6">Warm Explorer</div>
          <p className="text-slate-400 text-sm max-w-xs mb-8 leading-relaxed">
            The official digital travel journal for North East India. Hand-crafted stories and verified travel guides for the curious wanderer.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-orange-200 cursor-pointer" data-icon="public">public</span>
            <span className="material-symbols-outlined text-orange-200 cursor-pointer" data-icon="share">share</span>
            <span className="material-symbols-outlined text-orange-200 cursor-pointer" data-icon="mail">mail</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-orange-200 mb-4">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/privacy-policy" className="text-slate-400 hover:text-slate-100 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/permit-guidelines" className="text-slate-400 hover:text-slate-100 text-sm transition-colors">Permit Guidelines</Link></li>
              <li><Link to="/contact-us" className="text-slate-400 hover:text-slate-100 text-sm transition-colors">Contact Us</Link></li>
              <li><a className="text-slate-400 hover:text-slate-100 text-sm transition-colors" href="#">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-orange-200 mb-4">State Boards</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="text-slate-400 hover:text-slate-100 text-sm transition-colors" href="#">Arunachal Tourism</a></li>
              <li><a className="text-slate-400 hover:text-slate-100 text-sm transition-colors" href="#">Assam Tourism</a></li>
              <li><a className="text-slate-400 hover:text-slate-100 text-sm transition-colors" href="#">Meghalaya Tourism</a></li>
              <li><a className="text-slate-400 hover:text-slate-100 text-sm transition-colors" href="#">Sikkim Tourism</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700/50 py-8 px-12 text-center text-slate-500 text-xs">
        © 2024 Northeast India Tourism Department. All Rights Reserved. Credits: Regional Tourism Council.
      </div>
    </footer>
  );
}

export default Footer;