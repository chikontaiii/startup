import { Clock, Hand, Car, Truck, Package, Wrench, Building, Boxes, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const resources = [
  { icon: Clock, label: 'Свободное время' },
  { icon: Hand, label: 'Рабочие руки' },
  { icon: Car, label: 'Автомобиль' },
  { icon: Truck, label: 'Грузовик' },
  { icon: Package, label: 'Товар' },
  { icon: Wrench, label: 'Оборудование' },
  { icon: Building, label: 'Помещение' },
  { icon: Boxes, label: 'Складское место' },
  { icon: Sparkles, label: 'Услуга' },
];

export default function ResourceCategories() {
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} id="resources" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold accent-text tracking-widest uppercase mb-4 block">
            Ресурсы и потребности
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 mb-6">
            Ресурсом может быть <span className="accent-text">всё</span>
          </h2>
          <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
            Платформа работает не с профессиями, а с тем, что доступно прямо
            сейчас — время, руки, транспорт, товар, место.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {resources.map((item, i) => (
            <div
              key={i}
              className={`reveal ${isVisible ? 'is-visible' : ''} group surface rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 hover:border-emerald-300 transition-all duration-300 cursor-default shadow-sm`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-emerald-50 group-hover:bg-emerald-100 transition-colors duration-300">
                <item.icon className="w-7 h-7 accent-text" />
              </div>
              <span className="text-sm sm:text-base font-medium text-charcoal-700 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
