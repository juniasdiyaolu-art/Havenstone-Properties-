import { useState } from 'react';
import { X, Bed, Bath, Maximize2, MapPin, CheckCircle2, MessageSquare, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Property } from '../types';
import { formatPriceNgn } from '../data/properties';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onScheduleInspection: (property: Property) => void;
}

export default function PropertyModal({
  property,
  onClose,
  onScheduleInspection,
}: PropertyModalProps) {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.image];

  const currentImage = images[activeImageIndex] || property.image;

  const whatsappMessage = encodeURIComponent(
    `Hello Havenstone Properties, I am interested in viewing '${property.name}' (${property.code}) located in ${property.location} priced at ${formatPriceNgn(property.priceNgn)}. Please provide further details.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#12151B] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0D10]/80">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
              {property.type}
            </span>
            <span className="text-xs font-mono text-neutral-500">
              REF: {property.code}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual Carousel / Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black">
              <img
                src={currentImage}
                alt={property.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-xs text-neutral-200 font-mono">
                Image {activeImageIndex + 1} of {images.length}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === i
                        ? 'border-[#C5A880] scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${property.name} thumbnail ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Price Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#C5A880] mb-1.5">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                {property.name}
              </h2>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                Asking Price
              </span>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#E2C99A] tabular-nums">
                {formatPriceNgn(property.priceNgn)}
              </div>
            </div>
          </div>

          {/* Key Metrics - Unboxed */}
          <div className="grid grid-cols-3 gap-4 bg-[#1C212A]/60 rounded-xl p-4 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 text-[#C5A880]">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">Bedrooms</span>
                <span className="text-base font-semibold text-white">{property.bedrooms} En-suite</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 text-[#C5A880]">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">Bathrooms</span>
                <span className="text-base font-semibold text-white">{property.bathrooms} Baths</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-white/5 text-[#C5A880]">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">Total Area</span>
                <span className="text-base font-semibold text-white">{property.sizeSqm} sqm</span>
              </div>
            </div>
          </div>

          {/* Property Description */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#C5A880] font-semibold mb-2">
              Property Description
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Key Features & Amenities */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#C5A880] font-semibold mb-3">
              Key Features & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-white/10 bg-[#0B0D10]/95 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/2348128844540?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-md bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 text-xs font-semibold tracking-wider text-emerald-300 uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Enquiry</span>
            </a>
            <a
              href="tel:+2348128844540"
              className="py-2.5 px-4 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold tracking-wider text-neutral-200 uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span className="tabular-nums">08128844540</span>
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onScheduleInspection(property);
            }}
            className="w-full sm:w-auto py-3 px-6 text-xs font-semibold tracking-widest uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C5A880]/10"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Private Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
