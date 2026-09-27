import { Star, ShieldCheck, MapPin, CreditCard, Bot, BarChart3, Layers, Search } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const roadmap = [
  {
    phase: 'MVP',
    status: 'Сейчас',
    items: [
      { icon: Star, text: 'Создание заявок и откликов' },
      { icon: Star, text: 'Профиль исполнителя' },
      { icon: Star, text: 'Автоматическое сопоставление' },
      { icon: Star, text: 'Уведомления' },
    ],
    highlight: true,
  },
  {
    phase: 'Фаза 2',
    status: 'Далее',
    items: [
      { icon: Star, text: 'Рейтинги и отзывы' },
      { icon: ShieldCheck, text: 'Проверка пользователей' },
      { icon: MapPin, text: 'GPS-навигация' },
      { icon: CreditCard, text: 'Безопасные платежи' },
    ],
    highlight: false,
  },
  {
    phase: 'Фаза 3',
    status: 'Будущее',
    items: [
      { icon: Bot, text: 'AI-помощник' },
      { icon: Layers, text: 'Объединение заявок' },
      { icon: Search, text: 'Поиск обратных грузов' },
      { icon: BarChart3, text: 'Аналитика для бизнеса' },
    ],
    highlight: false,
  },
];

export default function Roadmap() {
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} id="roadmap" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold accent-text tracking-widest uppercase mb-4 block">
            Roadmap
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 mb-6">
            Путь <span className="accent-text">развития</span>
          </h2>
          <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
            Начинаем с малого. Расширяемся по мере роста.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roadmap.map((phase, i) => (
            <div
              key={i}
              className={`reveal ${isVisible ? 'is-visible' : ''} relative rounded-3xl p-7 transition-all duration-300 shadow-sm ${
                phase.highlight
                  ? 'bg-charcoal-800 border border-charcoal-800'
                  : 'surface'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Phase number */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      phase.highlight ? 'text-emerald-300' : 'accent-text'
                    }`}
                  >
                    {phase.status}
                  </span>
                  <h3 className={`font-display font-bold text-xl mt-1 ${
                    phase.highlight ? 'text-bone-50' : 'text-charcoal-900'
                  }`}>
                    {phase.phase}
                  </h3>
                </div>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg ${
                    phase.highlight
                      ? 'bg-emerald-600 text-bone-50'
                      : 'bg-emerald-50 accent-text'
                  }`}
                >
                  {i + 1}
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {phase.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <item.icon
                      className={`w-4 h-4 flex-shrink-0 ${
                        phase.highlight ? 'text-emerald-300' : 'accent-text'
                      }`}
                    />
                    <span className={`text-sm ${
                      phase.highlight ? 'text-bone-200' : 'text-charcoal-500'
                    }`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Connector line */}
              {i < roadmap.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-bone-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
