import { ShieldCheck, Compass, Award, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      index: '01',
      icon: ShieldCheck,
      title: 'Verified Properties',
      description: 'We carefully present properties so clients can make informed decisions.',
      detail: 'Rigorous Governor’s Consent and C of O title verification before any listing.',
    },
    {
      index: '02',
      icon: Compass,
      title: 'Local Expertise',
      description: 'Deep knowledge of Lagos neighborhoods and the property market.',
      detail: 'Unmatched ground intelligence spanning Lekki, Ikoyi, Victoria Island, and beyond.',
    },
    {
      index: '03',
      icon: Award,
      title: 'Professional Service',
      description: 'From first enquiry to inspection and closing, we make the process simple.',
      detail: 'White-glove representation with private chauffeur inspections and legal support.',
    },
    {
      index: '04',
      icon: TrendingUp,
      title: 'Investment Opportunities',
      description: 'Discover properties with strong lifestyle and investment potential.',
      detail: 'Data-driven yield analytics for double-digit rental returns and capital growth.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0E1116] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
            The Havenstone Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white uppercase font-normal">
            Real Estate, Done Differently.
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            We operate at the intersection of architectural beauty, legal certainty, and personalized discretion for discerning property buyers.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-[#12151B] border border-white/10 hover:border-[#C5A880]/40 rounded-xl p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880]/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-neutral-500 tracking-wider">
                      {feat.index}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#E2C99A] transition-colors mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed font-light mb-4">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-xs text-neutral-400 font-normal">
                  {feat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
