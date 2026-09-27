import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function CTA() {
  const { ref, isVisible } = useReveal();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMsg('Введите корректный email');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('early_access')
        .insert({ email });

      if (error) {
        if (error.code === '23505') {
          setStatus('success');
          return;
        }
        throw error;
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Что-то пошло не так. Попробуйте ещё раз.');
    }
  };

  return (
    <section ref={ref} id="cta" className="relative py-24 sm:py-32 overflow-hidden bg-bone-100">
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full surface mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 accent-text" />
            <span className="text-xs font-medium text-charcoal-500 tracking-wide">
              Ранний доступ · Бишкек
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl text-charcoal-900 mb-6 leading-tight">
            Будьте первыми,<br />
            кто <span className="accent-text">соединит ресурсы</span>
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-400 mb-10 max-w-xl mx-auto">
            Оставьте email — мы пришлём приглашение, как только платформа будет
            готова. Без спама, только по делу.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="surface rounded-2xl p-8 max-w-md mx-auto animate-scale-in shadow-sm">
              <CheckCircle2 className="w-12 h-12 accent-text mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-charcoal-900 mb-2">
                Вы в списке!
              </h3>
              <p className="text-charcoal-400 text-sm">
                Мы свяжемся с вами, когда платформа откроется.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="your@email.com"
                disabled={status === 'loading'}
                className="flex-1 px-5 py-4 rounded-2xl surface text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:border-emerald-400 transition-all duration-300 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-7 py-4 rounded-2xl bg-charcoal-800 text-bone-50 font-semibold hover:bg-charcoal-900 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Получить доступ
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </>
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-500 text-sm mt-4 animate-fade-in">{errorMsg}</p>
          )}
        </div>
      </div>
    </section>
  );
}
