import React from 'react';
import { Network, Sparkles, Sun, Moon, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenStudio: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenStudio,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const isPastel = theme === 'pastel';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between h-20 rounded-2xl mt-3 px-5 sm:px-7 transition-all duration-300 ${
            isPastel
              ? 'bg-white/80 backdrop-blur-xl border border-white/80 shadow-lg shadow-indigo-100/40 text-slate-800'
              : 'bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl text-slate-100'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo / Wordmark */}
          <a href="#home" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md ${
                isPastel
                  ? 'bg-gradient-to-tr from-rose-400 via-purple-400 to-sky-400 shadow-purple-200/50'
                  : 'bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-indigo-500/20'
              }`}
            >
              <div
                className={`w-full h-full rounded-[10px] flex items-center justify-center p-1 overflow-hidden ${
                  isPastel ? 'bg-slate-900' : 'bg-slate-950'
                }`}
              >
                <img
                  src="/assets/aistudio/logo.png"
                  alt="Modellyng Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-xl tracking-tight flex items-center gap-1.5 ${
                  isPastel ? 'text-slate-900' : 'text-white'
                }`}
              >
                Modellyng
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    isPastel ? 'bg-rose-400' : 'bg-cyan-400'
                  } animate-pulse`}
                />
              </span>
              <span
                className={`text-[10px] uppercase tracking-wider font-semibold -mt-1 font-mono ${
                  isPastel ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                Academic AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div
            className={`hidden md:flex items-center gap-8 text-sm font-medium ${
              isPastel ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            <a
              href="#home"
              className={`transition-colors hover:${
                isPastel ? 'text-indigo-600' : 'text-cyan-400'
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors hover:${
                isPastel ? 'text-indigo-600' : 'text-cyan-400'
              }`}
            >
              About
            </a>
            <a
              href="#product"
              className={`transition-colors hover:${
                isPastel ? 'text-indigo-600' : 'text-cyan-400'
              }`}
            >
              Product
            </a>
            <a
              href="#team"
              className={`transition-colors hover:${
                isPastel ? 'text-indigo-600' : 'text-cyan-400'
              }`}
            >
              Our Team
            </a>
            <a
              href="#roadmap"
              className={`transition-colors hover:${
                isPastel ? 'text-indigo-600' : 'text-cyan-400'
              }`}
            >
              Roadmap
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:${
                isPastel ? 'text-indigo-600' : 'text-cyan-400'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Action & Theme CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Aesthetic Theme Switcher */}
            <button
              onClick={onToggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                isPastel
                  ? 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 shadow-sm'
                  : 'bg-slate-800 text-cyan-300 border-slate-700 hover:bg-slate-700 shadow-inner'
              }`}
              title="Toggle between Soft Pastel and Midnight Glass aesthetics"
              aria-label="Toggle visual theme"
            >
              {isPastel ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                  <span>Pastel Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Midnight Mode</span>
                </>
              )}
            </button>

            {/* Launch Interactive Studio */}
            <button
              onClick={onOpenStudio}
              className={`px-4 py-2 text-xs font-semibold rounded-xl shadow-md transition-all flex items-center gap-1.5 ${
                isPastel
                  ? 'bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white shadow-purple-200/60'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-600/20'
              }`}
              aria-label="Open Interactive Academic Studio"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Studio</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border text-xs ${
                isPastel
                  ? 'bg-slate-100 border-slate-200 text-slate-700'
                  : 'bg-slate-800 border-slate-700 text-slate-200'
              }`}
              aria-label="Toggle theme"
            >
              {isPastel ? (
                <Sparkles className="w-4 h-4 text-rose-500" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isPastel
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-slate-300 hover:bg-slate-800'
              } focus:outline-none`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden rounded-2xl mt-2 p-5 border space-y-3 transition-all ${
              isPastel
                ? 'bg-white/95 backdrop-blur-xl border-slate-200 shadow-xl text-slate-800'
                : 'bg-slate-900/95 backdrop-blur-xl border-slate-800 shadow-2xl text-slate-200'
            }`}
          >
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-indigo-500/10"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-indigo-500/10"
            >
              About
            </a>
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-indigo-500/10"
            >
              Product
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-indigo-500/10"
            >
              Our Team
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-indigo-500/10"
            >
              Roadmap
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-indigo-500/10"
            >
              Contact
            </a>
            <div className="pt-3 border-t border-slate-200/30 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStudio();
                }}
                className={`w-full py-2.5 text-xs font-semibold rounded-xl text-white shadow-md text-center flex items-center justify-center gap-2 ${
                  isPastel
                    ? 'bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Interactive Studio</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
