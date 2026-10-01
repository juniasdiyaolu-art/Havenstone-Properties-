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
    <section id="services" className="py-24 bg-[#080B10] border-y border-[#ECC974]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#ECC974] font-semibold block mb-3">
            The Havenstone Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white uppercase font-normal">
            Real Estate, Done Differently.
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
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
                className="bg-[#0D1017] border border-white/10 hover:border-[#ECC974]/60 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(236,201,116,0.25),0_15px_20px_rgba(0,0,0,0.6)] shadow-xl relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#ECC974]/10 border border-[#ECC974]/30 flex items-center justify-center text-[#ECC974] group-hover:bg-[#ECC974]/20 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(236,201,116,0.3)] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#ECC974]/70 tracking-widest font-semibold">
                      {feat.index}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#F3DE90] transition-colors mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed font-light mb-4">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 font-normal">
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
