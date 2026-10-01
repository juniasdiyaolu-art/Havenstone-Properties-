import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0D10] to-[#12151B] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
          Direct Private Advisory
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase font-normal leading-tight">
          Let's Find Your Next Property.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
          Tell us what you're looking for and our team will help you find the right opportunity.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2348128844540?text=Hello%20Havenstone%20Properties,%20I%20would%20like%20to%20speak%20with%20a%20property%20consultant%20about%20current%20listings%20in%20Lagos."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-widest uppercase text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 hover:scale-[1.02] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white" />
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Call Phone Button */}
          <a
            href="tel:+2348128844540"
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-[#C5A880]/15 hover:scale-[1.02] cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#0B0D10]" />
            <span>Call 08128844540</span>
          </a>
        </div>

        {/* Small reassurance line */}
        <p className="mt-6 text-xs text-neutral-400 font-mono tracking-wide">
          Direct Line: <span className="text-[#E2C99A] font-semibold">08128844540</span> · Available Mon – Sat (8:00 AM – 7:00 PM WAT)
        </p>
      </div>
    </section>
  );
}
