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
        <div className="absolute inset-0 bg-[#060709]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060709]/95 via-[#060709]/75 to-[#060709]/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] text-[#ECC974] font-semibold block mb-4">
          Private Client Appointments
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase font-normal leading-tight text-balance">
          Your Dream Home Could Be <br />
          <span className="italic gold-gradient-text drop-shadow-[0_2px_15px_rgba(236,201,116,0.35)]">One Viewing Away.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
          Don't just search for a property. Find a place that fits the way you want to live.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookInspection}
            className="gold-btn w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-lg flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 stroke-[2.5]" />
            <span>Book an Inspection</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
