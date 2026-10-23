import React, { useState } from 'react';
import {
  Handshake,
  Mail,
  Linkedin,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ContactSubmission, ThemeMode } from '../types';

interface ContactSectionProps {
  theme: ThemeMode;
  submissions: ContactSubmission[];
  onSubmitInquiry: (submission: Omit<ContactSubmission, 'id' | 'timestamp'>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  theme,
  submissions,
  onSubmitInquiry
}) => {
  const isPastel = theme === 'pastel';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('Campus Pilot & Testing (Phase 03)');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    onSubmitInquiry({
      name: name.trim(),
      email: email.trim(),
      type,
      message: message.trim()
    });

    setShowSuccess(true);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setShowSuccess(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      className={`py-20 md:py-28 border-t transition-colors relative scroll-mt-24 ${
        isPastel
          ? 'border-slate-200/60 bg-gradient-to-b from-white via-rose-50/20 to-white'
          : 'border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-3xl p-8 sm:p-14 border relative overflow-hidden shadow-2xl transition-all ${
            isPastel
              ? 'bg-gradient-to-br from-white via-purple-50/60 to-rose-50/50 border-purple-200/80 shadow-purple-100/60 text-slate-800'
              : 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-indigo-500/30 text-slate-100'
          }`}
        >
          {/* Decorative Glow */}
          <div
            className={`absolute -top-24 -right-24 w-80 h-80 blur-[100px] rounded-full pointer-events-none ${
              isPastel ? 'bg-rose-300/30' : 'bg-blue-600/20'
            }`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Info Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium border ${
                  isPastel
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-cyan-950/60 text-cyan-300 border-cyan-800/50'
                }`}
              >
                <Handshake className="w-3.5 h-3.5" />
                OPEN FOR COLLABORATION
              </div>

              <h2
                className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
                  isPastel ? 'text-slate-900' : 'text-white'
                }`}
              >
                Let's Build Better Research Together.
              </h2>

              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isPastel ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                “Interested in academic innovation, research collaboration, or
                campus pilot opportunities? Connect with the Modellyng team.”
              </p>

              <p className="text-slate-500 text-xs sm:text-sm">
                Have an idea, research challenge, or collaboration opportunity?
                We'd love to hear from you.
              </p>

              {/* Official Touchpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div
                  className={`p-4 rounded-2xl border flex items-center gap-3.5 ${
                    isPastel
                      ? 'bg-white/80 border-slate-200/80 shadow-sm'
                      : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isPastel
                        ? 'bg-sky-50 text-sky-700'
                        : 'bg-blue-500/10 text-blue-400'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">
                      Official Email
                    </span>
                    <span
                      className={`text-xs font-medium block truncate ${
                        isPastel ? 'text-slate-800' : 'text-slate-200'
                      }`}
                    >
                      contact@modellyng.startup
                    </span>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl border flex items-center gap-3.5 ${
                    isPastel
                      ? 'bg-white/80 border-slate-200/80 shadow-sm'
                      : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isPastel
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-indigo-500/10 text-indigo-400'
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">
                      Startup LinkedIn
                    </span>
                    <span
                      className={`text-xs font-medium block truncate ${
                        isPastel ? 'text-slate-800' : 'text-slate-200'
                      }`}
                    >
                      Modellyng Official (Verified)
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-time Submissions feed if any */}
              {submissions.length > 0 && (
                <div
                  className={`p-4 rounded-2xl border space-y-2 text-xs ${
                    isPastel
                      ? 'bg-white/70 border-purple-200'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-600 font-bold block">
                    Recent Inquiries Sent in this Session ({submissions.length})
                  </span>
                  <div className="space-y-1.5 max-h-24 overflow-y-auto">
                    {submissions.map((sub) => (
                      <div
                        key={sub.id}
                        className="flex items-center justify-between text-[11px] text-slate-500"
                      >
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {sub.name} ({sub.type})
                        </span>
                        <span className="font-mono text-[10px]">
                          {sub.timestamp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-5">
              <div
                className={`p-6 sm:p-8 rounded-3xl border space-y-4 shadow-xl transition-all ${
                  isPastel
                    ? 'bg-white/95 border-purple-200 shadow-purple-100/50 text-slate-800'
                    : 'bg-slate-950/90 border-slate-800 text-slate-100'
                }`}
              >
                <h3 className="text-base font-bold flex items-center gap-2">
                  <MessageSquare
                    className={`w-4 h-4 ${
                      isPastel ? 'text-rose-500' : 'text-cyan-400'
                    }`}
                  />
                  <span>Hubungi Tim Modellyng</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Kirimkan pesan ketertarikan untuk campus pilot, riset bersama,
                  atau diskusi produk.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">
                      Nama Lengkap / Institusi
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Lab Komputasi Universitas / Nama Peneliti"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                        isPastel
                          ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-purple-400 focus:bg-white'
                          : 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">
                      Email Anda
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@institution.ac.id"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                        isPastel
                          ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-purple-400 focus:bg-white'
                          : 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">
                      Peluang Kolaborasi
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                        isPastel
                          ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-400 focus:bg-white'
                          : 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400'
                      }`}
                    >
                      <option>Campus Pilot & Testing (Phase 03)</option>
                      <option>Academic Research Collaboration</option>
                      <option>General Inquiry / Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">
                      Pesan Singkat
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan ide atau potensi implementasi..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-all ${
                        isPastel
                          ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-purple-400 focus:bg-white'
                          : 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 rounded-2xl font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 text-white ${
                      isPastel
                        ? 'bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 shadow-purple-200'
                        : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 shadow-indigo-600/30'
                    }`}
                  >
                    <span>Contact Our Team</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  {showSuccess && (
                    <div
                      className={`p-3 rounded-2xl border text-xs font-mono text-center flex items-center justify-center gap-2 animate-in fade-in ${
                        isPastel
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>
                        Pesan terkirim berhasil! Tim Modellyng akan segera
                        merespons ke email Anda.
                      </span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
