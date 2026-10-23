import React, { useState, useRef } from 'react';
import { Users, Mail, Linkedin, Sparkles, X, Check, ArrowUpRight, Camera, Upload, Image as ImageIcon } from 'lucide-react';
import { TeamMember, ThemeMode } from '../types';

interface TeamSectionProps {
  theme: ThemeMode;
  teamMembers: TeamMember[];
  onUpdateMemberPhoto?: (memberId: string, photoUrl: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  theme,
  teamMembers,
  onUpdateMemberPhoto
}) => {
  const isPastel = theme === 'pastel';
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');
  const [photoUpdated, setPhotoUpdated] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleApplyPhotoUrl = (memberId: string) => {
    if (!customPhotoUrl.trim() || !onUpdateMemberPhoto) return;
    onUpdateMemberPhoto(memberId, customPhotoUrl.trim());
    if (selectedMember && selectedMember.id === memberId) {
      setSelectedMember({ ...selectedMember, photo: customPhotoUrl.trim() });
    }
    setCustomPhotoUrl('');
    setPhotoUpdated(true);
    setTimeout(() => setPhotoUpdated(false), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, memberId: string) => {
    const file = e.target.files?.[0];
    if (!file || !onUpdateMemberPhoto) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onUpdateMemberPhoto(memberId, result);
        if (selectedMember && selectedMember.id === memberId) {
          setSelectedMember({ ...selectedMember, photo: result });
        }
        setPhotoUpdated(true);
        setTimeout(() => setPhotoUpdated(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section
      id="team"
      className={`py-20 md:py-28 border-t transition-colors relative scroll-mt-24 ${
        isPastel
          ? 'border-slate-200/60 bg-gradient-to-b from-white/40 via-purple-50/20 to-white/40'
          : 'border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium border ${
              isPastel
                ? 'bg-purple-50 text-purple-700 border-purple-200'
                : 'bg-indigo-950/60 text-indigo-300 border-indigo-800/50'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            LEADERSHIP & ENGINEERING
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isPastel ? 'text-slate-900' : 'text-white'
            }`}
          >
            Meet the Builders Behind Modellyng
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isPastel ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            Tim kolaboratif multidisiplin yang menggabungkan kepemimpinan produk,
            arsitektur sistem, rekayasa kecerdasan buatan, dan riset pasar.
          </p>
        </div>

        {/* Team Grid (5 Members) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between space-y-5 shadow-sm transition-all hover:scale-[1.01] hover:shadow-lg ${
                isPastel
                  ? 'bg-white/90 border-slate-200/80 hover:border-purple-300 shadow-purple-50/40 text-slate-800'
                  : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 text-slate-100'
              }`}
            >
              <div className="space-y-4">
                {/* Header with Photo & Title */}
                <div className="flex items-center gap-4">
                  {/* Photo with Fallback Initials */}
                  <div
                    className={`w-16 h-16 rounded-2xl overflow-hidden shadow-md ring-2 shrink-0 relative transition-transform duration-300 group-hover:scale-105 ${
                      isPastel
                        ? 'ring-purple-200/80 bg-slate-100'
                        : 'ring-slate-700 bg-slate-950'
                    }`}
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`Foto ${member.name}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          // Fallback to initials if image cannot load
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div
                      className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center font-bold text-lg text-white ${
                        member.photo ? 'hidden' : ''
                      }`}
                    >
                      {member.initials}
                    </div>
                  </div>

                  <div>
                    <h4
                      className={`text-base font-bold ${
                        isPastel ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {member.name}
                    </h4>
                    <span
                      className={`text-xs font-mono font-semibold block ${
                        isPastel ? 'text-purple-700' : 'text-cyan-400'
                      }`}
                    >
                      {member.shortRole}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Role Focus Pills & Action */}
              <div
                className={`space-y-3 pt-3 border-t ${
                  isPastel ? 'border-slate-100' : 'border-slate-800'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">
                    Fokus Peran:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focusAreas.map((focus, i) => (
                      <span
                        key={i}
                        className={`text-[11px] px-2.5 py-0.5 rounded-full border font-medium ${
                          isPastel
                            ? 'bg-slate-50 border-slate-200 text-slate-700'
                            : 'bg-slate-950 border-slate-800 text-slate-300'
                        }`}
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className={`font-semibold flex items-center gap-1 transition-colors ${
                      isPastel
                        ? 'text-purple-600 hover:text-purple-800'
                        : 'text-cyan-400 hover:text-cyan-300'
                    }`}
                  >
                    <span>View Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-slate-400 text-[11px] font-mono">
                    Official Member
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Details & Photo Management Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl space-y-6 ${
              isPastel
                ? 'bg-white border-purple-100 text-slate-800'
                : 'bg-slate-900 border-slate-800 text-slate-100'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {/* Photo in Modal */}
                <div
                  className={`w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-2 shrink-0 relative ${
                    isPastel
                      ? 'ring-purple-200 bg-slate-100'
                      : 'ring-slate-700 bg-slate-950'
                  }`}
                >
                  {selectedMember.photo ? (
                    <img
                      src={selectedMember.photo}
                      alt={`Foto ${selectedMember.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${selectedMember.gradient} flex items-center justify-center font-bold text-2xl text-white ${
                      selectedMember.photo ? 'hidden' : ''
                    }`}
                  >
                    {selectedMember.initials}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold">{selectedMember.name}</h3>
                  <p
                    className={`text-xs font-mono font-semibold ${
                      isPastel ? 'text-purple-700' : 'text-cyan-400'
                    }`}
                  >
                    {selectedMember.role}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white"
                aria-label="Close profile dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                  Tanggung Jawab & Kontribusi
                </span>
                <p className="leading-relaxed">{selectedMember.bio}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
                  Bidang Kepakaran Utama
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.focusAreas.map((f, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        isPastel
                          ? 'bg-purple-50 text-purple-700 border-purple-200'
                          : 'bg-slate-800 text-slate-200 border-slate-700'
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo customization helper */}
              <div
                className={`p-3.5 rounded-2xl border space-y-2 ${
                  isPastel
                    ? 'bg-purple-50/50 border-purple-100 text-slate-700'
                    : 'bg-slate-950 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-purple-600" />
                    <span>Ganti / Unggah Foto Anggota</span>
                  </span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, selectedMember.id)}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border flex items-center gap-1 transition-all ${
                      isPastel
                        ? 'bg-white hover:bg-slate-100 border-purple-200 text-purple-700 shadow-sm'
                        : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-cyan-300'
                    }`}
                  >
                    <Upload className="w-3 h-3" />
                    <span>Pilih Berkas Lokal</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    placeholder="Atau tempel URL gambar (https://...)"
                    value={customPhotoUrl}
                    onChange={(e) => setCustomPhotoUrl(e.target.value)}
                    className={`flex-1 px-3 py-1.5 rounded-xl border text-xs focus:outline-none transition-all ${
                      isPastel
                        ? 'bg-white border-slate-200 text-slate-800 focus:border-purple-300'
                        : 'bg-slate-900 border-slate-800 text-white focus:border-cyan-400'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyPhotoUrl(selectedMember.id)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-all"
                  >
                    Terapkan
                  </button>
                </div>

                {photoUpdated && (
                  <p className="text-[11px] text-emerald-600 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Foto berhasil diperbarui!
                  </p>
                )}
              </div>

              <div
                className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
                  isPastel
                    ? 'bg-slate-50 border-slate-200'
                    : 'bg-slate-950 border-slate-800'
                }`}
              >
                <Mail className="w-4 h-4 text-purple-600" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Kontak Resmi
                  </span>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="text-xs font-semibold hover:underline"
                  >
                    {selectedMember.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className={`px-5 py-2 text-xs font-semibold rounded-xl border ${
                  isPastel
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
