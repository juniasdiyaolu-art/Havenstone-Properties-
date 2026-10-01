import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/2348128844540?text=Hello%20Havenstone%20Properties,%20I%20am%20interested%20in%20inspecting%20a%20property%20in%20Lagos."
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/40"
        aria-label="Chat on WhatsApp with Havenstone Properties"
      >
        <MessageSquare className="w-5 h-5 fill-white text-white" />
        <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">
          WhatsApp Us
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </a>
    </aside>
  );
}
