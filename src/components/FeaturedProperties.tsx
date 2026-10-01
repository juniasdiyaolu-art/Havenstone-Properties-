import { useState } from 'react';
import { Bed, Bath, Maximize2, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { Property } from '../types';
import { formatPriceNgn } from '../data/properties';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onBookInspection: (property: Property) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FeaturedProperties({
  properties,
  onSelectProperty,
  onBookInspection,
  activeFilter,
  onFilterChange,
}: FeaturedPropertiesProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { label: 'All Properties', value: 'All' },
    { label: 'Lekki Phase 1', value: 'Lekki' },
    { label: 'Ikoyi', value: 'Ikoyi' },
    { label: 'Banana Island', value: 'Banana Island' },
    { label: 'Victoria Island', value: 'Victoria Island' },
    { label: 'Chevron / Ajah', value: 'Chevron/Ajah' },
  ];

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="properties" className="py-24 bg-[#0B0D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white uppercase font-normal">
              Featured Properties
            </h2>
            <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
              Explore some of the exceptional properties currently available through Havenstone Properties.
            </p>
          </div>

          {/* Interactive Filter Tabs (buttons allowed per zero-pill discipline) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#12151B] border border-white/10 rounded-lg overflow-x-auto max-w-full">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => onFilterChange(tab.value)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A880] text-[#0B0D10] font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, idx) => (
            <div
              key={property.id}
              className="group bg-[#12151B] border border-white/10 hover:border-[#C5A880]/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-1.5 shadow-xl"
            >
              {/* Image Frame with Zoom */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 cursor-pointer"
                onClick={() => onSelectProperty(property)}
              >
                {!imageErrors[property.id] ? (
                  <img
                    src={property.image}
                    alt={property.name}
                    onError={() => handleImageError(property.id)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1C212A] to-[#12151B] p-6 text-center">
                    <Sparkles className="w-8 h-8 text-[#C5A880] mb-2" />
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      {property.type}
                    </span>
                    <span className="text-sm font-serif text-white mt-1">
                      {property.name}
                    </span>
                  </div>
                )}

                {/* Subtle Image Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151B] via-transparent to-black/20" />

                {/* Property Type Text - Unboxed */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-white/90 drop-shadow-md bg-black/40 backdrop-blur-md px-2.5 py-1 rounded">
                    {property.type}
                  </span>
                </div>

                {/* Code index */}
                <div className="absolute top-4 right-4 z-10 text-[11px] font-mono tracking-wider text-neutral-300 bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* Location & Title */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProperty(property)}
                    className="font-serif text-2xl font-normal text-white group-hover:text-[#E2C99A] transition-colors cursor-pointer leading-snug"
                  >
                    {property.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-3 text-xl font-serif font-semibold text-[#E2C99A] tracking-tight tabular-nums">
                    {formatPriceNgn(property.priceNgn)}
                  </div>

                  {/* Specs: Unboxed clean text with typographic separator (frontend-design zero-pill discipline) */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <span aria-hidden="true" className="text-neutral-700">·</span>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <span aria-hidden="true" className="text-neutral-700">·</span>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{property.sizeSqm} sqm</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProperty(property)}
                    className="flex-1 py-2.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors flex items-center justify-center gap-1.5 group-hover:border-[#C5A880]/40 cursor-pointer"
                  >
                    <span>View Property</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </button>

                  <button
                    onClick={() => onBookInspection(property)}
                    className="py-2.5 px-3 text-xs font-semibold tracking-wider uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                    title="Book Inspection"
                  >
                    Inspect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {properties.length === 0 && (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-xl my-6">
            <p className="text-neutral-400 text-sm">
              No properties matched your current filter criteria.
            </p>
            <button
              onClick={() => onFilterChange('All')}
              className="mt-4 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0B0D10] bg-[#C5A880] rounded-md"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
