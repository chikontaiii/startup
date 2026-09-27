import { Truck, Package, Hand, User } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const roles = [
  { icon: Truck, label: 'Водитель', desc: 'У меня свободный Sprinter', time: 'Утро' },
  { icon: Hand, label: 'Грузчик', desc: 'Свободен на 4 часа', time: 'После доставки' },
  { icon: Package, label: 'Поставщик', desc: 'Есть 100 кг муки', time: 'Другой день' },
];

export default function MultiRole() {
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-bone-100">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold accent-text tracking-widest uppercase mb-4 block">
            Один человек — много ролей
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 mb-6 leading-tight">
            Не «кто этот человек»,<br />
            а <span className="accent-text">«что у него есть сейчас»</span>
          </h2>
          <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
            Утром — водитель. После доставки — грузчик. Другой день — поставщик.
            Или вообще ничего не предлагает.
          </p>
        </div>

        {/* Central person with radiating roles */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} relative flex flex-col items-center transition-delay-200`}>
          {/* Central node */}
          <div className="relative mb-8">
            <div className="w-24 h-24 rounded-full bg-charcoal-800 flex items-center justify-center">
              <User className="w-10 h-10 text-bone-50" strokeWidth={1.5} />
            </div>
          </div>

          {/* Role cards */}
          <div className="grid sm:grid-cols-3 gap-5 w-full max-w-4xl">
            {roles.map((role, i) => (
              <div
                key={i}
                className="surface rounded-2xl p-6 text-center hover:border-emerald-300 transition-all duration-300 animate-fade-up shadow-sm"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-emerald-50">
                  <role.icon className="w-6 h-6 accent-text" />
                </div>
                <h4 className="font-display font-semibold text-charcoal-900 text-lg mb-1">
                  {role.label}
                </h4>
                <p className="text-sm text-charcoal-400 mb-3">{role.desc}</p>
                <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-bone-100 text-charcoal-500">
                  {role.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
