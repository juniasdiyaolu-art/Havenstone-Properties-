import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onScheduleClick: () => void;
}

export default function Navbar({ onScheduleClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Properties', href: '#properties' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D10]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
            : 'bg-gradient-to-b from-[#0B0D10]/80 via-[#0B0D10]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-left"
            aria-label="Havenstone Properties Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#C5A880] transition-colors">
              HAVENSTONE
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-sans font-semibold pl-1 border-l border-white/20">
              PROPERTIES
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#C5A880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+2348128844540"
              className="text-xs font-medium tracking-wider text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
              title="Call Havenstone Properties"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="tabular-nums">08128844540</span>
            </a>
            <button
              onClick={onScheduleClick}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-colors shadow-sm whitespace-nowrap"
            >
              Schedule Inspection
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0B0D10]/95 backdrop-blur-xl flex flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-serif text-lg font-bold tracking-[0.2em] uppercase text-white">
                HAVENSTONE
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-300 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wider text-neutral-200 hover:text-[#C5A880] transition-colors py-1 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScheduleClick();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#0B0D10] bg-[#C5A880] hover:bg-[#D4B57E] rounded-md transition-colors"
            >
              Schedule Inspection
            </button>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <a
                href="tel:+2348128844540"
                className="py-2.5 px-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="tabular-nums">08128844540</span>
              </a>
              <a
                href="https://wa.me/2348128844540?text=Hello%20Havenstone%20Properties,%20I%20would%20like%20to%20enquire%20about%20your%20Lagos%20properties."
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-md bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-xs font-medium text-emerald-300 flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
