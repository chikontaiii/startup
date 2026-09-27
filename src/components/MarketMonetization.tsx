import { Coffee, MapPin, Percent, Briefcase, Crown } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const monetization = [
  {
    icon: Percent,
    title: 'Комиссия с заявок',
    desc: 'Небольшой процент с каждой выполненной заявки. Работник получил 1000 сом — платформа берёт малую долю.',
  },
  {
    icon: Briefcase,
    title: 'Комиссия с B2B-сделок',
    desc: 'Процент с закупки товара или доставки между предприятиями.',
  },
  {
    icon: Crown,
    title: 'Подписка для бизнеса',
    desc: 'Расширенные функции, аналитика, приоритетное размещение заявок.',
  },
];

export default function MarketMonetization() {
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} id="pricing" className="relative py-24 sm:py-32 overflow-hidden bg-bone-100">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* First market */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-12`}>
          <span className="text-sm font-semibold accent-text tracking-widest uppercase mb-4 block">
            Первый рынок
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 mb-6">
            Начинаем с <span className="accent-text">HoReCa</span>
          </h2>
          <p className="text-lg text-charcoal-400 max-w-2xl mx-auto mb-8">
            Кафе, кофейни, рестораны, небольшие склады и магазины — там, где
            одновременно нужны сотрудники, товары и доставка.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full surface shadow-sm">
            <MapPin className="w-5 h-5 accent-text" />
            <span className="text-charcoal-700 font-medium">Старт в Бишкеке</span>
          </div>
        </div>

        {/* HoReCa categories */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} grid grid-cols-2 sm:grid-cols-5 gap-4 mb-20 transition-delay-100`}>
          {['Кафе', 'Кофейни', 'Рестораны', 'Склады', 'Магазины'].map((cat, i) => (
            <div
              key={i}
              className="surface rounded-2xl p-5 flex flex-col items-center gap-2 hover:border-emerald-300 transition-all duration-300 shadow-sm"
            >
              <Coffee className="w-6 h-6 accent-text" />
              <span className="text-sm font-medium text-charcoal-700">{cat}</span>
            </div>
          ))}
        </div>

        {/* Monetization */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-12 transition-delay-200`}>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-charcoal-900 mb-4">
            Как платформа <span className="accent-text">зарабатывает</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {monetization.map((item, i) => (
            <div
              key={i}
              className="surface rounded-3xl p-7 hover:border-emerald-300 transition-all duration-300 shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-emerald-50">
                <item.icon className="w-7 h-7 accent-text" />
              </div>
              <h4 className="font-display font-bold text-lg text-charcoal-900 mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-charcoal-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
