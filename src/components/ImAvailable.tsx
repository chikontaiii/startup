import { MapPin, Navigation, Star, Zap, Hand, Clock } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const nearbyJobs = [
  { distance: '2,1 км', title: 'Официант', pay: '900 сом', time: '3 часа', icon: '☕' },
  { distance: '3,4 км', title: 'Грузчик', pay: '1200 сом', time: '4 часа', icon: '💪' },
  { distance: '5,8 км', title: 'Доставка', pay: '1500 сом', time: '1,5 часа', icon: '🚐' },
];

export default function ImAvailable() {
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} id="available" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="text-sm font-semibold accent-text tracking-widest uppercase mb-4 block">
              Функция «Я освободился»
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 mb-6 leading-tight">
              Навигатор <span className="accent-text">возможностей</span>
            </h2>
            <p className="text-lg text-charcoal-400 mb-8 leading-relaxed">
              Человек открывает приложение, нажимает «Я свободен» — и видит все
              подходящие заявки рядом. Не нужно искать вакансии вручную.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, text: 'Где вы находитесь' },
                { icon: Clock, text: 'На какое время свободны' },
                { icon: Zap, text: 'Что можете предложить' },
                { icon: Hand, text: 'Какой навык или транспорт' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-charcoal-600"
                >
                  <div className="w-9 h-9 rounded-lg surface flex items-center justify-center">
                    <item.icon className="w-4 h-4 accent-text" />
                  </div>
                  <span className="text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} flex justify-center transition-delay-200`}>
            <div className="relative w-72 sm:w-80">
              {/* Phone frame */}
              <div className="relative bg-charcoal-800 rounded-[2.5rem] p-3 shadow-xl">
                {/* Screen */}
                <div className="bg-bone-50 rounded-[2rem] overflow-hidden h-[560px] relative">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-4 pb-2">
                    <span className="text-xs text-charcoal-400">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-charcoal-400" />
                      <div className="w-1 h-1 rounded-full bg-charcoal-400" />
                      <div className="w-1 h-1 rounded-full bg-charcoal-400" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="px-5 pt-2 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
                        <Hand className="w-4 h-4 text-bone-50" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-charcoal-800 text-sm font-semibold">Вы свободны</p>
                        <p className="accent-text text-xs">Активен до 22:00</p>
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="mx-5 mb-4 h-32 rounded-2xl bg-bone-100 relative overflow-hidden border border-bone-200">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Navigation className="w-3 h-3 text-bone-50" strokeWidth={2.5} />
                      </div>
                    </div>
                    {/* Nearby dots */}
                    <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-charcoal-400" />
                    <div className="absolute bottom-6 right-10 w-2 h-2 rounded-full bg-charcoal-400" />
                    <div className="absolute top-8 right-6 w-2 h-2 rounded-full bg-charcoal-400" />
                  </div>

                  {/* Job list */}
                  <div className="px-5">
                    <p className="text-xs text-charcoal-400 mb-3 font-medium">
                      Подходящие заявки рядом
                    </p>
                    <div className="space-y-2.5">
                      {nearbyJobs.map((job, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-xl surface hover:border-emerald-300 transition-all duration-300 animate-fade-up"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-bone-100 flex items-center justify-center text-lg">
                            {job.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-charcoal-800 text-sm font-medium">{job.title}</p>
                            <p className="text-charcoal-400 text-xs flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.distance} · {job.time}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="accent-text text-sm font-bold">{job.pay}</p>
                            <div className="flex items-center gap-0.5 justify-end">
                              <Star className="w-3 h-3 accent-text fill-emerald-600" />
                              <span className="text-charcoal-400 text-xs">4.8</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-bone-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
