import { Phone, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#040507] border-t border-[#ECC974]/15 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 text-left">
            <a href="#hero" className="inline-block mb-3">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] uppercase text-white hover:text-[#ECC974] transition-colors">
                HAVENSTONE
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#ECC974] font-sans font-semibold pl-1.5 border-l border-white/20 ml-1">
                PROPERTIES
              </span>
            </a>

            <p className="font-serif italic text-lg gold-gradient-text mb-4">
              Find a Place Worth Coming Home To.
            </p>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-light">
              Premier luxury real estate brokerage and advisory based in Lagos, Nigeria. Representing exceptional waterfront homes, private gated villas, and premier commercial investments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#ECC974] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#F3DE90] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Social Icons */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#ECC974] font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href="tel:+2348128844540"
                className="flex items-center gap-2 hover:text-[#ECC974] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#ECC974] group-hover:scale-110 transition-transform" />
                <span className="tabular-nums font-semibold text-white">08128844540</span>
              </a>

              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#ECC974]" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-3 font-semibold">
                Follow Havenstone
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#ECC974] hover:shadow-[0_0_12px_rgba(236,201,116,0.3)] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#ECC974] hover:shadow-[0_0_12px_rgba(236,201,116,0.3)] transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#ECC974] hover:shadow-[0_0_12px_rgba(236,201,116,0.3)] transition-all"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.3 1.05.21 2.2-.12 2.93-.89.58-.6.86-1.43.86-2.27V.02z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/2348128844540"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-700 hover:shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 Havenstone Properties. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-[#ECC974] transition-colors cursor-pointer">
              Lagos State Lands Compliance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
