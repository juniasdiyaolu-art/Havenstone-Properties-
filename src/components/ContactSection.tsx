import { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Apartment',
    preferredLocation: 'Lekki Phase 1',
    budget: '₦100M - ₦200M',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean enquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      propertyType: 'Apartment',
      preferredLocation: 'Lekki Phase 1',
      budget: '₦100M - ₦200M',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
                Connect With Us
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white uppercase font-normal">
                Get In Touch
              </h2>

              <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
                Whether you have a specific property in mind or require discreet acquisition advice, our Lagos advisory team is standing by.
              </p>

              {/* Direct Touchpoints */}
              <div className="mt-8 space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block uppercase tracking-wider">Phone</span>
                    <a
                      href="tel:+2348128844540"
                      className="text-base font-semibold text-white hover:text-[#C5A880] transition-colors tabular-nums"
                    >
                      08128844540
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block uppercase tracking-wider">WhatsApp</span>
                    <a
                      href="https://wa.me/2348128844540"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Chat With Us
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block uppercase tracking-wider">Email</span>
                    <a
                      href="mailto:hello@havenstoneproperties.com"
                      className="text-base font-semibold text-white hover:text-[#C5A880] transition-colors"
                    >
                      hello@havenstoneproperties.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block uppercase tracking-wider">Location</span>
                    <span className="text-base font-semibold text-white">
                      Lagos, Nigeria
                    </span>
                    <span className="text-xs text-neutral-400 block mt-0.5">
                      Admiralty Way, Lekki Phase 1, Lagos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Note */}
            <div className="mt-10 p-4 rounded-xl bg-[#12151B] border border-white/5 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C5A880] shrink-0" />
              <div className="text-xs text-neutral-400">
                <span className="text-white font-medium block">Office Hours</span>
                Monday to Saturday: 8:00 AM – 7:00 PM WAT
              </div>
            </div>
          </div>

          {/* Right Column: Stylish Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#12151B] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif text-3xl text-white font-normal mb-2">
                    Enquiry Received
                  </h3>

                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed mb-6 font-light">
                    Thank you, <span className="text-white font-medium">{formData.fullName}</span>. A senior Havenstone Property Advisor has received your details and will contact you via <span className="text-white font-medium">{formData.phone}</span> shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/2348128844540?text=Hello%20Havenstone,%20I%20just%20submitted%20an%20enquiry%20under%20the%20name%20${encodeURIComponent(formData.fullName)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold uppercase tracking-wider text-white flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Fast-Track on WhatsApp</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-300"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h3 className="font-serif text-2xl text-white font-normal">
                      Send Property Enquiry
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Fill out the form below and an agent will respond within 2 business hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Babatunde Adeleke"
                        className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0803 123 4567"
                        className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] transition-colors tabular-nums"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. adeleke@example.com"
                      className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Property Type */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                      >
                        <option value="Apartment">Apartment</option>
                        <option value="Luxury Duplex">Luxury Duplex</option>
                        <option value="Executive Home">Executive Home</option>
                        <option value="Waterfront Residence">Waterfront Residence</option>
                        <option value="Commercial / Land">Commercial / Land</option>
                      </select>
                    </div>

                    {/* Preferred Location */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Preferred Location
                      </label>
                      <select
                        value={formData.preferredLocation}
                        onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                        className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                      >
                        <option value="Lekki Phase 1">Lekki Phase 1</option>
                        <option value="Ikoyi">Ikoyi</option>
                        <option value="Banana Island">Banana Island</option>
                        <option value="Victoria Island">Victoria Island</option>
                        <option value="Chevron / Lekki">Chevron / Lekki</option>
                        <option value="Ajah">Ajah</option>
                        <option value="Ikeja GRA">Ikeja GRA</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                      >
                        <option value="Under ₦100M">Under ₦100,000,000</option>
                        <option value="₦100M - ₦200M">₦100M – ₦200,000,000</option>
                        <option value="₦200M - ₦400M">₦200M – ₦400,000,000</option>
                        <option value="₦400M+">₦400,000,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you are looking for (e.g., swimming pool, dedicated compound, investment timeline)..."
                      className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-semibold tracking-widest uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 mt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Your contact details are strictly confidential. We never spam.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
