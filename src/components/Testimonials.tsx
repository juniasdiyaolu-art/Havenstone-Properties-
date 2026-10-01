import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#060709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#ECC974] font-semibold block mb-3">
            Client Perspectives
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white uppercase font-normal">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
            From seamless title vetting to closing on landmark residences, hear directly from our homeowners and private investors.
          </p>
        </div>

        {/* 3 Testimonials Grid with Glowing Gold Card Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#0B0E14] border border-white/10 hover:border-[#ECC974]/60 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-2 hover:shadow-[0_0_35px_-5px_rgba(236,201,116,0.25),0_15px_20px_rgba(0,0,0,0.7)] shadow-xl"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#ECC974]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_4px_rgba(236,201,116,0.6)]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-600 group-hover:text-[#ECC974]/60 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Lockup with Tasteful Monogram Initials */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#121620] to-[#1C212E] border border-[#ECC974]/40 flex items-center justify-center text-xs font-serif font-bold text-[#ECC974] shadow-[0_0_10px_rgba(236,201,116,0.15)]">
                  {item.initials}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">
                    {item.author}
                  </div>
                  <div className="text-xs text-neutral-400">
                    <span>{item.role}</span>
                    <span aria-hidden="true" className="mx-1.5 text-neutral-600">·</span>
                    <span className="text-[#ECC974] font-medium">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
