import { ArrowRight, CheckCircle2 } from 'lucide-react';
import showcaseImage from '../assets/images/prop_banana_island_waterfront_1790419056821.jpg';

interface PropertyShowcaseProps {
  onViewProperties: () => void;
}

export default function PropertyShowcase({ onViewProperties }: PropertyShowcaseProps) {
  const stats = [
    { value: '250+', label: 'Properties Listed' },
    { value: '120+', label: 'Happy Clients' },
    { value: '8+', label: 'Years Experience' },
    { value: '12', label: 'Prime Locations' },
  ];

  return (
    <section className="py-24 bg-[#0B0D10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large High-Res Luxury Property Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[1/1] border border-white/10 shadow-2xl group">
              <img
                src={showcaseImage}
                alt="Luxury waterfront architecture in Banana Island Lagos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#12151B]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block">
                    Private Listing
                  </span>
                  <span className="text-sm font-serif text-white font-medium">
                    Banana Island Lagoon Front
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 block">Verified Title</span>
                  <span className="text-xs font-semibold text-[#E2C99A]">Gov. Consent</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold backdrop aura */}
            <div className="absolute -inset-4 bg-[#C5A880]/5 rounded-3xl blur-2xl -z-10" />
          </div>

          {/* Right: Editorial Narrative & Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
              The Journey
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white uppercase font-normal leading-[1.15] text-balance">
              More Than a Property. <br />
              <span className="italic font-light text-[#E2C99A]">It's Your Next Chapter.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              Whether you're buying your first home, upgrading your lifestyle or searching for your next investment, we help you discover spaces that match your goals.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Bespoke search tailored strictly to your aesthetic and security standards</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Complete confidentiality for private family offices and high-net-worth individuals</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                onClick={onViewProperties}
                className="px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>View Our Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Demo Statistics Grid */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-left">
                    <div className="font-serif text-3xl sm:text-4xl font-normal text-white tabular-nums tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
