import { ArrowRight, Hand, Search, MapPin, Clock, Zap } from 'lucide-react';

const matchItems = [
  { icon: '☕', label: 'Официант', x: 12, y: 22 },
  { icon: '🚐', label: 'Доставка', x: 82, y: 18 },
  { icon: '🥛', label: 'Товар', x: 18, y: 76 },
  { icon: '💪', label: 'Грузчик', x: 78, y: 72 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full surface-warm mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-charcoal-500 tracking-wide">
                Платформа соединения ресурсов — Бишкек
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-[1.05] mb-6">
              Мне нужно
              <br />
              <span className="text-charcoal-300">↔</span>{' '}
              <span className="accent-text">У меня есть</span>
            </h1>

            <p className="text-lg sm:text-xl text-charcoal-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Единая платформа, которая в реальном времени соединяет тех, кому
              что-то нужно, с теми, у кого это есть или кто может это сделать.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-charcoal-800 text-bone-50 font-semibold text-base hover:bg-charcoal-900 transition-all duration-300"
              >
                <Search className="w-5 h-5" strokeWidth={2.5} />
                Мне нужно
              </a>
              <a
                href="#available"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl surface text-charcoal-700 font-semibold text-base hover:border-emerald-400 transition-all duration-300"
              >
                <Hand className="w-5 h-5 accent-text" strokeWidth={2.5} />
                Я свободен
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 justify-center lg:justify-start text-sm text-charcoal-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 accent-text" />
                <span>Мгновенное сопоставление</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 accent-text" />
                <span>Рядом с вами</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 accent-text" />
                <span>В реальном времени</span>
              </div>
            </div>
          </div>

          {/* Right: clean diagram */}
          <div className="relative h-[400px] sm:h-[480px] flex items-center justify-center">
            <div className="relative w-full max-w-md h-full">
              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-20 h-20 rounded-full bg-charcoal-800 flex items-center justify-center">
                  <Sparkle />
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
                {matchItems.map((item, i) => {
                  const cx = 200;
                  const cy = 200;
                  const tx = (item.x / 100) * 400;
                  const ty = (item.y / 100) * 400;
                  return (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={tx}
                      y2={ty}
                      stroke="#c4bba9"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                    />
                  );
                })}
              </svg>

              {/* Floating nodes */}
              {matchItems.map((item, i) => (
                <div
                  key={i}
                  className="absolute z-20"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    className="surface rounded-2xl px-4 py-3 flex items-center gap-2 shadow-sm animate-float"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-charcoal-700 whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-charcoal-300">
            <span className="text-xs tracking-widest uppercase">Скролл</span>
            <div className="w-px h-12 bg-bone-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkle() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4L22 18L36 20L22 22L20 36L18 22L4 20L18 18L20 4Z"
        fill="#fdfcfa"
      />
    </svg>
  );
}
