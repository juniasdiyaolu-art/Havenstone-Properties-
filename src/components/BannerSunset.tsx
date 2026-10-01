import { Calendar, ArrowRight } from 'lucide-react';
import sunsetBannerImg from '../assets/images/banner_sunset_luxury_villa_1790419094130.jpg';

interface BannerSunsetProps {
  onBookInspection: () => void;
}

export default function BannerSunset({ onBookInspection }: BannerSunsetProps) {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background Image with Contrast Scrim */}
      <div className="absolute inset-0 -z-10">
        <img
          src={sunsetBannerImg}
          alt="Luxury villa at sunset in Lagos"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Measured dark scrim for text readability */}
        <div className="absolute inset-0 bg-[#0B0D10]/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/95 via-[#0B0D10]/70 to-[#0B0D10]/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] text-[#E2C99A] font-semibold block mb-4">
          Private Client Appointments
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase font-normal leading-tight text-balance">
          Your Dream Home Could Be <br />
          <span className="italic text-[#E2C99A]">One Viewing Away.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
          Don't just search for a property. Find a place that fits the way you want to live.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookInspection}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-black/40 cursor-pointer hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
