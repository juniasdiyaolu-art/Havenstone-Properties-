import { ArrowUpRight, MapPin } from 'lucide-react';
import { Neighborhood } from '../types';

interface ExploreLagosProps {
  locations: Neighborhood[];
  onSelectLocation: (locationName: string) => void;
}

export default function ExploreLagos({ locations, onSelectLocation }: ExploreLagosProps) {
  return (
    <section className="py-24 bg-[#080B10] border-t border-[#ECC974]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/10 pb-8 gap-4">
          <div className="max-w-2xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#ECC974] font-semibold block mb-3">
              Prime Enclaves
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white uppercase font-normal">
              Explore Lagos
            </h2>
            <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
              From the tranquil waterfront of Banana Island to the corporate skyline of Victoria Island, discover prime neighborhoods that define African luxury.
            </p>
          </div>

          <div className="text-xs text-neutral-400 font-mono">
            8 Prime Districts · Verified Title Coverage
          </div>
        </div>

        {/* 8 Location Cards Grid with Glowing Gold Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.id}
              onClick={() => onSelectLocation(loc.name)}
              className="group relative bg-[#0D1017] border border-white/10 hover:border-[#ECC974]/70 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_-5px_rgba(236,201,116,0.35),0_20px_25px_-5px_rgba(0,0,0,0.8)] shadow-xl flex flex-col justify-end aspect-[4/5]"
            >
              {/* Image Frame */}
              <div className="absolute inset-0 z-0">
                <img
                  src={loc.image}
                  alt={`${loc.name}, Lagos`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-[#060709]/65 to-transparent" />
              </div>

              {/* Top overlay badge */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-neutral-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  {loc.propertiesCount} Listings
                </span>
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:bg-gradient-to-r group-hover:from-[#ECC974] group-hover:to-[#C79730] group-hover:text-[#07090C] group-hover:shadow-[0_0_15px_rgba(236,201,116,0.6)] transition-all">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-5 text-left">
                <div className="flex items-center gap-1.5 text-xs text-[#ECC974] mb-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-wider font-semibold">{loc.name}</span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#F3DE90] transition-colors">
                  {loc.title}
                </h3>

                <p className="mt-1.5 text-xs text-neutral-300 line-clamp-2 font-light">
                  {loc.description}
                </p>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Price Guide</span>
                  <span className="text-[#ECC974] font-semibold tabular-nums">{loc.averagePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
