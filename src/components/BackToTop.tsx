import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <aside aria-label="Back to top" className="fixed bottom-6 left-6 z-40">
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-[#0B0E14]/90 backdrop-blur-md border border-[#ECC974]/30 text-neutral-300 hover:text-[#ECC974] hover:border-[#ECC974] hover:shadow-[0_0_20px_rgba(236,201,116,0.35)] flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </aside>
  );
}
