import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Как это работает', href: '#how' },
  { label: 'Примеры', href: '#cases' },
  { label: 'Я свободен', href: '#available' },
  { label: 'Ресурсы', href: '#resources' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Roadmap', href: '#roadmap' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bone-50/90 backdrop-blur-md border-b border-bone-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-charcoal-800 flex items-center justify-center transition-transform group-hover:scale-105">
            <Sparkles className="w-4.5 h-4.5 text-bone-50" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg text-charcoal-800 tracking-tight">
            Ресурс<span className="accent-text">Точка</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal-400 hover:text-charcoal-800 transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#cta"
            className="px-5 py-2.5 rounded-xl bg-charcoal-800 text-bone-50 font-semibold text-sm hover:bg-charcoal-900 transition-all duration-300"
          >
            Ранний доступ
          </a>
        </div>

        <button
          className="lg:hidden text-charcoal-800 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bone-50 border-b border-bone-200 animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-charcoal-500 hover:text-charcoal-800 transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-3 rounded-xl bg-charcoal-800 text-bone-50 font-semibold text-sm text-center"
            >
              Ранний доступ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
