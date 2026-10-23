import React from 'react';
import { Network, Sparkles, Heart } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
  onOpenStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onOpenStudio }) => {
  const isPastel = theme === 'pastel';

  return (
    <footer
      className={`border-t py-12 text-xs transition-colors relative z-10 ${
        isPastel
          ? 'border-slate-200/60 bg-white text-slate-500'
          : 'border-slate-800/80 bg-slate-950 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800">
          {/* Wordmark & Brief */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center p-1 overflow-hidden shadow-sm ${
                  isPastel
                    ? 'bg-slate-900 border border-slate-700/50'
                    : 'bg-slate-900 border border-slate-800'
                }`}
              >
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.02.08-removebg-preview_849b3f05.png"
                  alt="Modellyng Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <span
                className={`font-bold text-base tracking-tight ${
                  isPastel ? 'text-slate-900' : 'text-white'
                }`}
              >
                Modellyng
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  isPastel
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                v0.1
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              AI-powered academic knowledge modeling platform for students,
              lecturers, and researchers.
            </p>
          </div>

          {/* Section Navigation */}
          <div
            className={`flex flex-wrap items-center justify-center gap-6 text-xs font-medium ${
              isPastel ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            <a href="#home" className="hover:text-purple-600 transition-colors">
              Home
            </a>
            <a
              href="#about"
              className="hover:text-purple-600 transition-colors"
            >
              About
            </a>
            <a
              href="#product"
              className="hover:text-purple-600 transition-colors"
            >
              Product
            </a>
            <a href="#team" className="hover:text-purple-600 transition-colors">
              Our Team
            </a>
            <a
              href="#roadmap"
              className="hover:text-purple-600 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#contact"
              className="hover:text-purple-600 transition-colors"
            >
              Contact
            </a>
            <button
              onClick={onOpenStudio}
              className="text-purple-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              Studio Workspace
            </button>
          </div>
        </div>

        {/* Copyright & Ethics Tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © 2025 Modellyng Startup. All rights reserved. Developed with
            academic integrity & Human-in-the-Loop ethics.
          </p>
          <div className="flex items-center gap-3">
            <span>Responsible AI</span>
            <span>•</span>
            <span>Source Traceable</span>
            <span>•</span>
            <span>Academic Edutech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
