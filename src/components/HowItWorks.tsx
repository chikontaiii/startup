import { Search, Hand, FileText, Clock, MapPin, Wallet, Bell, User, Briefcase, Truck, CheckCircle2, ArrowLeftRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const neederSteps = [
  { icon: FileText, title: 'Создание заявки', desc: 'Опишите что нужно: товар, работник, доставка' },
  { icon: Clock, title: 'Время и место', desc: 'Укажите когда и где нужен ресурс' },
  { icon: Wallet, title: 'Оплата', desc: 'Задайте бюджет — система подберёт' },
  { icon: Bell, title: 'Отклики', desc: 'Получайте уведомления от исполнителей' },
];

const doerSteps = [
  { icon: User, title: 'Профиль', desc: 'Навыки, транспорт, оборудование' },
  { icon: Hand, title: 'Доступное время', desc: 'Когда вы свободны и готовы' },
  { icon: Briefcase, title: 'Просмотр заявок', desc: 'Подходящие заявки рядом с вами' },
  { icon: CheckCircle2, title: 'Принятие', desc: 'Принимайте заявку и приступайте' },
];

export default function HowItWorks() {
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} id="how" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="text-sm font-semibold accent-text tracking-widest uppercase mb-4 block">
            Как это работает
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal-900 mb-6">
            Две стороны <span className="accent-text">одной системы</span>
          </h2>
          <p className="text-lg text-charcoal-400 max-w-2xl mx-auto">
            Один и тот же человек может быть и требователем, и исполнителем —
            в любой момент времени.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-4 relative">
          {/* Need side */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} surface rounded-3xl p-7 sm:p-9 transition-delay-100`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-charcoal-800 flex items-center justify-center">
                <Search className="w-6 h-6 text-bone-50" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-charcoal-900">Требователь</h3>
                <p className="text-sm text-charcoal-400">«Мне нужно»</p>
              </div>
            </div>

            <div className="space-y-4">
              {neederSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-bone-100 border border-bone-200 hover:border-charcoal-300 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-bone-200 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-charcoal-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal-800 text-sm mb-0.5">{step.title}</h4>
                    <p className="text-sm text-charcoal-400">{step.desc}</p>
                  </div>
                  <span className="text-2xl font-display font-bold text-bone-300">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center connector */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-12 h-12 rounded-full surface flex items-center justify-center shadow-sm">
              <ArrowLeftRight className="w-5 h-5 accent-text" />
            </div>
          </div>

          {/* Doer side */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} surface rounded-3xl p-7 sm:p-9 transition-delay-200`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center">
                <Hand className="w-6 h-6 text-bone-50" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-charcoal-900">Исполнитель</h3>
                <p className="text-sm accent-text">«У меня есть»</p>
              </div>
            </div>

            <div className="space-y-4">
              {doerSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-emerald-300 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <step.icon className="w-5 h-5 accent-text" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal-800 text-sm mb-0.5">{step.title}</h4>
                    <p className="text-sm text-charcoal-400">{step.desc}</p>
                  </div>
                  <span className="text-2xl font-display font-bold text-emerald-200">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center mt-12 transition-delay-300`}>
          <p className="text-charcoal-400 text-sm flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 accent-text" />
            Один пользователь может выступать в обеих ролях — в разное время
          </p>
        </div>
      </div>
    </section>
  );
}
