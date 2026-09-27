import { MessageCircle, Phone, Users, Search, ArrowDown, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const chaosItems = [
  { icon: MessageCircle, label: 'WhatsApp' },
  { icon: Phone, label: 'Звонки' },
  { icon: Users, label: 'Знакомые' },
  { icon: Search, label: 'Поиск' },
];

export default function Problem() {
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-bone-100">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold accent-text tracking-widest uppercase mb-4 block">
            Проблема
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 mb-6 leading-tight">
            Сегодня поиск ресурсов —<br />
            <span className="accent-text">это хаос</span>
          </h2>
          <p className="text-lg text-charcoal-400 max-w-2xl mx-auto leading-relaxed">
            Часы на переписку, десятки звонков, ненадёжные знакомые — и нет
            гарантии, что нужный человек вообще найдётся.
          </p>
        </div>

        {/* Chaotic arrangement */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} relative h-64 sm:h-72 mb-12 transition-delay-200`}>
          {chaosItems.map((item, i) => {
            const positions = [
              { top: '5%', left: '10%', rotate: '-12deg' },
              { top: '15%', right: '15%', rotate: '8deg' },
              { bottom: '20%', left: '20%', rotate: '5deg' },
              { bottom: '5%', right: '10%', rotate: '-8deg' },
            ];
            const pos = positions[i];
            return (
              <div
                key={i}
                className="absolute surface rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm animate-float"
                style={{
                  ...pos,
                  animationDelay: `${i * 0.4}s`,
                  transform: `${pos.rotate ? `rotate(${pos.rotate})` : ''}`,
                }}
              >
                <item.icon className="w-5 h-5 text-charcoal-500" />
                <span className="font-medium text-charcoal-700 text-sm">{item.label}</span>
              </div>
            );
          })}

          {/* Messy lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 280" preserveAspectRatio="none">
            <path d="M150 50 Q400 100 600 80" stroke="#c4bba9" strokeWidth="1.5" fill="none" strokeDasharray="5 5" opacity="0.5" />
            <path d="M200 200 Q400 50 650 220" stroke="#c4bba9" strokeWidth="1.5" fill="none" strokeDasharray="5 5" opacity="0.5" />
            <path d="M100 150 Q300 250 550 100" stroke="#c4bba9" strokeWidth="1.5" fill="none" strokeDasharray="5 5" opacity="0.5" />
          </svg>
        </div>

        {/* Arrow down */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} flex justify-center mb-12 transition-delay-300`}>
          <div className="w-12 h-12 rounded-full surface flex items-center justify-center animate-bounce">
            <ArrowDown className="w-5 h-5 accent-text" />
          </div>
        </div>

        {/* Solution */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center transition-delay-500`}>
          <div className="inline-flex flex-col items-center gap-4 surface rounded-3xl px-8 py-6 sm:px-12 sm:py-8 max-w-2xl shadow-sm">
            <CheckCircle2 className="w-10 h-10 accent-text" />
            <p className="text-xl sm:text-2xl font-display font-semibold text-charcoal-800">
              Создал заявку → система нашла ресурсы →<br />
              <span className="accent-text">заявка выполнена</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
