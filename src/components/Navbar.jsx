 import {useState} from "react";
import logoText from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];
 return (    
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 py-4 sm:px-6 md:flex md:justify-between lg:px-8">
             <button type="button"
              className="justify-self-start
               text-slate-700 md:hidden"
             aria-label="Toggle menu"
             aria-expanded={menuOpen}
             onClick={() => setMenuOpen((open) => !open)}
                >
                <img src={hamburgerIcon} alt="Menu" className="h-6 w-6 object-contain" />
             </button>
             <a href="#home" className="flex items-center justify-center gap-2 md:mr-8 md:justify-start">  
               <img src={logoText} alt="logo" className="h-8 w-auto" /> 
                </a>
                
                <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
                  {NAV_LINKS.map((link, i) => (  
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`}
                        aria-current={i === 0 ? "page" : undefined}
                        className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-pink-500 ${
                          i === 0 ? "text-pink-600" : "text-slate-600 hover:text-slate-900"
                        }`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-self-end gap-2 sm:gap-4">
                    <a href="#signin" className="text-sm font-medium text-slate-700 hover:text-slate-900">
                        Sign In
                    </a>
                    <a href="#signup" className="rounded-full bg-[#D91B7E] px-[20px] py-[10px] text-sm font-semibold text-white shadow transition-opacity hover:opacity-90">
                        Sign Up
                    </a>
                </div>
            </nav>
            {menuOpen && (
                <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
                    {NAV_LINKS.map((link) => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`}
                                className="block rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                onClick={() => setMenuOpen(false)}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>      
    );
}
