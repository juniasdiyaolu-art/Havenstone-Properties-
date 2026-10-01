import { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { Property } from '../types';
import { PROPERTIES } from '../data/properties';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
}

export default function InspectionModal({
  isOpen,
  onClose,
  selectedProperty,
}: InspectionModalProps) {
  if (!isOpen) return null;

  const [propertyId, setPropertyId] = useState(
    selectedProperty ? selectedProperty.id : PROPERTIES[0].id
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [inspectionType, setInspectionType] = useState<'physical' | 'virtual'>('physical');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentProp = PROPERTIES.find((p) => p.id === propertyId) || PROPERTIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#07090C] border border-[#ECC974]/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden my-auto max-h-[92vh] flex flex-col text-left">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0E14]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#ECC974] font-bold block">
              Private Booking
            </span>
            <h3 className="font-serif text-2xl text-white font-normal mt-0.5">
              Schedule an Inspection
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#ECC974]" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 bg-[#07090C]">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ECC974]/15 border border-[#ECC974]/50 flex items-center justify-center text-[#ECC974] mx-auto shadow-[0_0_20px_rgba(236,201,116,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-3xl text-white">
                Inspection Reserved
              </h4>

              <p className="text-sm text-neutral-200 font-light leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="text-white font-medium">{fullName}</span>. Your private inspection request for <strong className="text-white">{currentProp.name}</strong> on <strong className="text-[#ECC974]">{date}</strong> ({timeSlot}) has been queued. Our concierge will call you at <strong className="text-white">{phone}</strong> to confirm security access credentials.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/2348128844540?text=Hello%20Havenstone,%20I%20just%20scheduled%20an%20inspection%20for%20${encodeURIComponent(currentProp.name)}%20on%20${date}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-bold uppercase tracking-wider text-neutral-200 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inspection Type Selector */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Inspection Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInspectionType('physical')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors cursor-pointer ${
                      inspectionType === 'physical'
                        ? 'bg-[#ECC974]/20 border-[#ECC974] text-white font-semibold shadow-[0_0_15px_rgba(236,201,116,0.25)]'
                        : 'border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Physical On-Site Inspection
                  </button>
                  <button
                    type="button"
                    onClick={() => setInspectionType('virtual')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors cursor-pointer ${
                      inspectionType === 'virtual'
                        ? 'bg-[#ECC974]/20 border-[#ECC974] text-white font-semibold shadow-[0_0_15px_rgba(236,201,116,0.25)]'
                        : 'border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Live HD Video Walkthrough
                  </button>
                </div>
              </div>

              {/* Property Selector */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Select Property *
                </label>
                <select
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className="w-full bg-[#121620] border border-white/10 hover:border-[#ECC974]/40 focus:border-[#ECC974] focus:ring-1 focus:ring-[#ECC974]/40 rounded-lg px-3 py-2 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                >
                  {PROPERTIES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {p.location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Chioma Nwosu"
                    className="w-full bg-[#121620] border border-white/10 hover:border-[#ECC974]/40 focus:border-[#ECC974] focus:ring-1 focus:ring-[#ECC974]/40 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0812 884 4540"
                    className="w-full bg-[#121620] border border-white/10 hover:border-[#ECC974]/40 focus:border-[#ECC974] focus:ring-1 focus:ring-[#ECC974]/40 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. chioma@example.com"
                  className="w-full bg-[#121620] border border-white/10 hover:border-[#ECC974]/40 focus:border-[#ECC974] focus:ring-1 focus:ring-[#ECC974]/40 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#ECC974]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#121620] border border-white/10 hover:border-[#ECC974]/40 focus:border-[#ECC974] focus:ring-1 focus:ring-[#ECC974]/40 rounded-lg px-3 py-2 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ECC974]" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#121620] border border-white/10 hover:border-[#ECC974]/40 focus:border-[#ECC974] focus:ring-1 focus:ring-[#ECC974]/40 rounded-lg px-3 py-2 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="10:00 AM - 12:00 PM">Morning (10:00 AM – 12:00 PM)</option>
                    <option value="1:00 PM - 3:00 PM">Afternoon (1:00 PM – 3:00 PM)</option>
                    <option value="4:00 PM - 6:00 PM">Evening Twilight (4:00 PM – 6:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-btn w-full py-3.5 px-6 text-xs font-bold tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Inspection Request'}
                </button>
              </div>

              <div className="text-center text-xs text-neutral-400 pt-2 flex items-center justify-center gap-2">
                <span>Or dial directly:</span>
                <a href="tel:+2348128844540" className="text-[#ECC974] font-semibold hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>08128844540</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
