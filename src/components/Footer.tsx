import { Sparkles, Github, Twitter, Send } from 'lucide-react';

const footerLinks = {
  Платформа: [
    { label: 'Как это работает', href: '#how' },
    { label: 'Примеры', href: '#cases' },
    { label: 'Я свободен', href: '#available' },
    { label: 'Ресурсы', href: '#resources' },
  ],
  Компания: [
    { label: 'Тарифы', href: '#pricing' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Ранний доступ', href: '#cta' },
  ],
  Контакты: [
    { label: 'Бишкек, Кыргызстан', href: '#' },
    { label: 'hello@resurstochna.kg', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-bone-200 py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-charcoal-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-bone-50" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg text-charcoal-800">
                Ресурс<span className="accent-text">Точка</span>
              </span>
            </a>
            <p className="text-sm text-charcoal-400 max-w-xs leading-relaxed mb-5">
              Единая цифровая платформа, которая в реальном времени соединяет
              тех, кому что-то нужно, с теми, у кого это есть.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl surface flex items-center justify-center text-charcoal-400 hover:text-emerald-600 hover:border-emerald-300 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-charcoal-800 text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm text-charcoal-400 hover:accent-text transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-bone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal-400">
            © 2026 РесурсТочка. Все права защищены.
          </p>
          <p className="text-sm text-charcoal-400">
            «Мне нужно» ↔ «У меня есть»
          </p>
        </div>
      </div>
    </footer>
  );
}
