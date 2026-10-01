import { useState } from 'react';
import { Search, MapPin, Home, Banknote, ArrowRight, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/images/hero_lagos_mansion_1790419045718.jpg';
import { SearchFilters } from '../types';

interface HeroProps {
  onExploreProperties: () => void;
  onScheduleInspection: () => void;
  onSearch: (filters: SearchFilters) => void;
}

export default function Hero({
  onExploreProperties,
  onScheduleInspection,
  onSearch,
}: HeroProps) {
  const [location, setLocation] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, propertyType, priceRange });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden">
      {/* Cinematic Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury modern architectural residence in Lagos"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/75 to-[#0B0D10]/50" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-transparent via-[#0B0D10]/40 to-[#0B0D10]/80" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center flex flex-col items-center">
        {/* Brand Kicker */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
          <span>Lagos Prime Real Estate</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>Bespoke Advisory</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-5xl leading-[1.08] text-balance font-medium">
          FIND A PLACE WORTH <span className="italic font-normal text-[#E2C99A]">COMING HOME TO.</span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
          Discover exceptional homes, apartments and investment properties in Lagos and beyond.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreProperties}
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#C5A880]/20 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onScheduleInspection}
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            Schedule an Inspection
          </button>
        </div>

        {/* Small Trust Line */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-400 font-medium tracking-wide">
          <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
          <span>Premium Homes</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Verified Listings</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Professional Service</span>
        </div>
      </div>

      {/* Floating Property Search Panel */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full mt-10">
        <div className="bg-[#12151B]/85 backdrop-blur-xl border border-white/15 rounded-xl p-5 sm:p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
              What are you looking for?
            </span>
            <span className="text-xs text-neutral-400">
              Verified Titles · Prime Locations
            </span>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Location selector */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs text-neutral-300 font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Location</span>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
              >
                <option value="All">All Lagos</option>
                <option value="Lekki">Lekki Phase 1</option>
                <option value="Ikoyi">Ikoyi</option>
                <option value="Banana Island">Banana Island</option>
                <option value="Victoria Island">Victoria Island</option>
                <option value="Chevron">Chevron, Lekki</option>
                <option value="Ajah">Ajah</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs text-neutral-300 font-medium flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Property Type</span>
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
              >
                <option value="All">Any Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Luxury Duplex">Luxury Duplex</option>
                <option value="Executive Home">Executive Family Home</option>
                <option value="Waterfront Residence">Waterfront Residence</option>
              </select>
            </div>

            {/* Price */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs text-neutral-300 font-medium flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Price</span>
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-[#1C212A] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
              >
                <option value="All">Any Price</option>
                <option value="under-100m">Under ₦100,000,000</option>
                <option value="100m-200m">₦100M - ₦200,000,000</option>
                <option value="above-200m">₦200,000,000+</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold tracking-wider uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Search className="w-4 h-4" />
                <span>Search Properties</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
