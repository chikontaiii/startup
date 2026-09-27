import { useState } from 'react';
import { Clock, MapPin, Wallet, CheckCircle2, Truck, Package, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const cases = [
  {
    id: 'waiter',
    title: 'Официант на смену',
    image: 'https://images.pexels.com/photos/4921569/pexels-photo-4921569.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'HoReCa',
    steps: [
      { role: 'Кофейня', text: 'Нужен официант, 18:00–21:00, 900 сом', icon: Clock },
      { role: 'Система', text: 'Нашла свободного исполнителя рядом', icon: CheckCircle2 },
      { role: 'Исполнитель', text: 'Принял заявку и вышел на смену', icon: CheckCircle2 },
    ],
  },
  {
    id: 'milk',
    title: '20 кг молока до 15:00',
    image: 'https://images.pexels.com/photos/14534512/pexels-photo-14534512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Товар',
    steps: [
      { role: 'Кофейня', text: 'Нужно 20 кг молока до 15:00', icon: Package },
      { role: 'Система', text: 'Нашла поставщика с нужным товаром', icon: CheckCircle2 },
      { role: 'Поставщик', text: 'Подтвердил наличие и цену', icon: CheckCircle2 },
    ],
  },
  {
    id: 'triple',
    title: 'Тройное соединение',
    image: 'https://images.pexels.com/photos/18434074/pexels-photo-18434074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Доставка + Товар',
    steps: [
      { role: 'Кофейня', text: 'Нужен товар + доставка до 19:00', icon: Package },
      { role: 'Поставщик', text: 'Отгрузил товар со склада', icon: CheckCircle2 },
      { role: 'Водитель', text: 'Доставил товар на Sprinter', icon: Truck },
      { role: 'Система', text: 'Соединила всех трёх в одном процессе', icon: CheckCircle2 },
    ],
  },
];

export default function CaseExamples() {
  const { ref, isVisible } = useReveal();
  const [activeCase, setActiveCase] = useState(0);

  const currentCase = cases[activeCase];

  return (
    <section ref={ref} id="cases" className="relative py-24 sm:py-32 overflow-hidden bg-bone-100">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold accent-text tracking-widest uppercase mb-4 block">
            Живые примеры
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 mb-6">
            Как это выглядит <span className="accent-text">на практике</span>
          </h2>
          <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
            Реальные сценарии из кофейни, ресторана и малого бизнеса.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} flex flex-wrap justify-center gap-3 mb-10 transition-delay-100`}>
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(i)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCase === i
                  ? 'bg-charcoal-800 text-bone-50'
                  : 'surface text-charcoal-400 hover:text-charcoal-700'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Active case display */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-8 items-center transition-delay-200`}>
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 group shadow-sm">
            <img
              src={currentCase.image}
              alt={currentCase.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-bone-50/90 text-charcoal-700">
                {currentCase.tag}
              </span>
              <h3 className="font-display font-bold text-2xl text-bone-50">{currentCase.title}</h3>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {currentCase.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl surface hover:border-emerald-300 transition-all duration-300 animate-fade-up shadow-sm"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <step.icon className="w-5 h-5 accent-text" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold accent-text uppercase tracking-wide">
                    {step.role}
                  </span>
                  <p className="text-charcoal-700 text-sm mt-0.5">{step.text}</p>
                </div>
                {i < currentCase.steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-charcoal-300 mt-3 rotate-90" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
