import { useState } from 'react';
import { ArrowRight, ShieldCheck, Scale, FileText, CheckCircle2, X } from 'lucide-react';
import aboutImage from '../assets/images/hero_lagos_mansion_1790419045718.jpg';

export default function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-24 bg-[#080B10] border-y border-[#ECC974]/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#ECC974] font-semibold block mb-3">
                Our Foundation
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-white uppercase font-normal leading-tight">
                Built Around Trust.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
                At Havenstone Properties, we believe finding the right property should feel exciting, not stressful.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                We combine local market knowledge, carefully selected properties and personal service to help buyers and investors move with confidence. Every property in our portfolio undergoes thorough title verification at the Lagos State Lands Bureau, ensuring completely seamless transitions.
              </p>

              {/* Trust Pillars */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0D1017] border border-white/10 hover:border-[#ECC974]/40 transition-colors flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#ECC974] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Title Verification</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Governor’s consent, Gazette, and C of O validation.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0D1017] border border-white/10 hover:border-[#ECC974]/40 transition-colors flex items-start gap-3">
                  <Scale className="w-5 h-5 text-[#ECC974] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Legal Integrity</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">Uncompromising escrow protection and documentation.</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <button
                  onClick={() => setModalOpen(true)}
                  className="gold-btn-secondary px-7 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-lg inline-flex items-center gap-2 cursor-pointer group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#ECC974] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Architectural Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#ECC974]/30 shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Modern Lagos luxury residential estate"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060709]/80 via-transparent to-transparent" />

                {/* Sub-card overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0B0E14]/90 backdrop-blur-md border border-[#ECC974]/30 text-left shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#ECC974] block font-semibold">
                        Headquarters
                      </span>
                      <span className="text-sm font-serif text-white">
                        Lekki Phase 1, Lagos, Nigeria
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block">
                        Client Rating
                      </span>
                      <span className="text-sm font-serif font-bold text-[#ECC974]">
                        4.9 / 5.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Details Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#07090C] border border-[#ECC974]/30 rounded-2xl p-6 sm:p-8 text-left shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-serif text-xl font-bold uppercase tracking-wider text-white">
                About Havenstone Properties
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-white cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-[#ECC974]" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-neutral-200 text-sm leading-relaxed font-light">
              <p>
                Founded to bridge the trust gap in the Nigerian luxury real estate market, Havenstone Properties provides high-net-worth individuals, institutional investors, and diaspora buyers with a frictionless property acquisition experience.
              </p>
              <p>
                We do not list unverified land or disputed buildings. Before any home appears on our platform, our in-house legal and surveying counsel completes thorough searches at the Lagos State Lands Bureau in Alausa, confirming root of title, survey beacon coordinates, and municipal planning approvals.
              </p>

              <h4 className="font-serif text-lg text-white font-medium pt-3">
                Our Advisory Commitments:
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ECC974] shrink-0" />
                  <span>100% Freehold or Governor’s Consent title vetting</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ECC974] shrink-0" />
                  <span>Dedicated transaction counsel and escrow advisory</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ECC974] shrink-0" />
                  <span>Private physical inspections with executive transport</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ECC974] shrink-0" />
                  <span>Diaspora-tailored live HD video walkthroughs</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="gold-btn px-6 py-2.5 text-xs font-bold tracking-wider uppercase rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
