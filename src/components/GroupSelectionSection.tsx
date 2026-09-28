import React from 'react';
import { Smartphone, Dumbbell, Home, Star, Plus, TrendingUp, Calendar, ArrowUp } from 'lucide-react';

export const GroupSelectionSection: React.FC = () => {
  const handleScrollToButtons = () => {
    const el = document.getElementById('action-buttons');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="w-full max-w-lg mx-auto px-3 py-2 text-zinc-900 select-none">
      {/* 1. Header Title & 2. Subtitle */}
      <div 
        onClick={handleScrollToButtons}
        className="flex flex-col items-center text-center mb-3 cursor-pointer group"
      >
        <div className="flex items-center gap-1 mb-1 text-emerald-500">
          <Plus className="w-2.5 h-2.5 stroke-[3]" />
          <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
          <Plus className="w-2.5 h-2.5 stroke-[3]" />
        </div>

        <h2 className="text-lg sm:text-xl font-black tracking-tight uppercase text-zinc-900 leading-tight group-hover:text-emerald-600 transition-colors">
          ESCOLHA O GRUPO IDEAL PARA VOCÊ
        </h2>

        <div className="w-8 h-1 bg-emerald-500 rounded-full my-1.5" />

        <p className="text-zinc-600 text-xs font-medium max-w-xs leading-snug">
          Escolha seu grupo e comece a receber as melhores ofertas.
        </p>
      </div>

      {/* 3 & 4. Compact Group Cards */}
      <div className="space-y-2">
        {/* Card 1: Grupo Eletrônicos */}
        <div 
          onClick={handleScrollToButtons}
          className="bg-white rounded-xl border border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 p-2 sm:p-2.5 flex flex-row items-center gap-2.5 transition-all cursor-pointer active:scale-[0.98]"
        >
          {/* Left Visual Container */}
          <div className="w-[85px] sm:w-[95px] h-[58px] sm:h-[62px] bg-gradient-to-br from-emerald-500/10 via-teal-500/15 to-emerald-600/20 rounded-lg flex flex-col items-center justify-center relative overflow-hidden shrink-0 border border-emerald-200/60 p-0.5 text-center">
            <div className="flex items-center justify-center gap-0.5 text-base sm:text-lg select-none mb-0.5">
              <span>📱</span>
              <span>🎧</span>
              <span>⌚</span>
            </div>
            <span className="text-emerald-700 bg-emerald-100/90 px-1.5 py-0.2 rounded-full text-[8px] font-bold shadow-2xs leading-none">
              Tech & Gadgets
            </span>
          </div>

          {/* Right Text Info */}
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                <Smartphone className="w-2.5 h-2.5 stroke-[2.5]" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-zinc-900 tracking-tight truncate">
                Grupo Eletrônicos
              </h3>
            </div>
            <p className="text-zinc-700 text-[10.5px] sm:text-[11.5px] leading-snug">
              Celulares, <strong className="text-zinc-900 font-bold">caixas de som</strong>, eletrônicos e acessórios com <strong className="text-emerald-600 font-bold">descontos imperdíveis.</strong>
            </p>
          </div>
        </div>

        {/* Card 2: Grupo Fitness */}
        <div 
          onClick={handleScrollToButtons}
          className="bg-white rounded-xl border border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 p-2 sm:p-2.5 flex flex-row items-center gap-2.5 transition-all cursor-pointer active:scale-[0.98]"
        >
          {/* Left Visual Container */}
          <div className="w-[85px] sm:w-[95px] h-[58px] sm:h-[62px] bg-gradient-to-br from-emerald-500/10 via-green-500/15 to-teal-600/20 rounded-lg flex flex-col items-center justify-center relative overflow-hidden shrink-0 border border-emerald-200/60 p-0.5 text-center">
            <div className="flex items-center justify-center gap-0.5 text-base sm:text-lg select-none mb-0.5">
              <span>👟</span>
              <span>🏋️‍♂️</span>
              <span>⚡</span>
            </div>
            <span className="text-emerald-700 bg-emerald-100/90 px-1.5 py-0.2 rounded-full text-[8px] font-bold shadow-2xs leading-none">
              Fitness & Saúde
            </span>
          </div>

          {/* Right Text Info */}
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                <Dumbbell className="w-2.5 h-2.5 stroke-[2.5]" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-zinc-900 tracking-tight truncate">
                Grupo Fitness
              </h3>
            </div>
            <p className="text-zinc-700 text-[10.5px] sm:text-[11.5px] leading-snug">
              Tênis, suplementos e roupas para <strong className="text-emerald-600 font-bold">pagar menos.</strong>
            </p>
          </div>
        </div>

        {/* Card 3: Grupo Ofertas Gerais */}
        <div 
          onClick={handleScrollToButtons}
          className="bg-white rounded-xl border border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 p-2 sm:p-2.5 flex flex-row items-center gap-2.5 transition-all cursor-pointer active:scale-[0.98]"
        >
          {/* Left Visual Container */}
          <div className="w-[85px] sm:w-[95px] h-[58px] sm:h-[62px] bg-gradient-to-br from-amber-500/10 via-orange-500/15 to-amber-600/20 rounded-lg flex flex-col items-center justify-center relative overflow-hidden shrink-0 border border-amber-200/60 p-0.5 text-center">
            <div className="grid grid-cols-2 gap-x-1 gap-y-0 text-xs sm:text-sm select-none mb-0.5">
              <span>🛠️</span>
              <span>🚗</span>
              <span>🏠</span>
              <span>🛒</span>
            </div>
            <span className="text-amber-800 bg-amber-100/95 px-1 py-0.2 rounded-full text-[7.5px] font-bold shadow-2xs leading-none truncate max-w-full">
              Gerais & Auto
            </span>
          </div>

          {/* Right Text Info */}
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-amber-100/80 text-amber-600 flex items-center justify-center shrink-0">
                <Home className="w-2.5 h-2.5 stroke-[2.5]" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-zinc-900 tracking-tight truncate">
                Grupo Ofertas Gerais
              </h3>
            </div>
            <p className="text-zinc-700 text-[10.5px] sm:text-[11.5px] leading-snug">
              Casa, ferramentas, <strong className="text-zinc-900 font-bold">acessórios automotivos</strong> e muito mais com <strong className="text-emerald-600 font-bold">descontos todos os dias.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 5. Footer Text */}
      <div className="text-center mt-3 mb-3">
        <p className="text-zinc-700 text-xs font-semibold">
          💚 Quer aproveitar tudo? Entre nos 3 grupos.
        </p>
      </div>

      {/* 6. Proof of Result Block (Compact 91,7%) */}
      <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-2.5 flex items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0">
            <TrendingUp className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-zinc-900 text-xs sm:text-sm font-bold leading-tight">
              de aproveitamento dos cupons pelo público
            </span>
            <span className="inline-flex items-center gap-1 text-zinc-500 text-[10px] font-medium mt-0.5">
              <Calendar className="w-2.5 h-2.5 text-zinc-400" />
              Atualizado nos últimos 15 dias
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <span className="text-emerald-600 font-black text-lg sm:text-xl bg-white px-2.5 py-1 rounded-lg border border-emerald-200/80 shadow-2xs">
            91,7%
          </span>
        </div>
      </div>

      {/* Responsive Community Rosleon Image & Yellow CTA Button */}
      <div className="mt-4 w-full flex flex-col items-center justify-center">
        <div className="w-[75%] max-w-[432px] mx-auto bg-white rounded-3xl border border-zinc-300 overflow-hidden shadow-2xl p-1 sm:p-2 transition-all duration-300">
          <img
            src="https://i.postimg.cc/Ghj7fJ78/Chat-GPT-Image-6-de-ago-de-2026-13-21-03.png"
            alt="Comunidade Rosleon Oficial"
            className="w-full h-auto block rounded-2xl shadow-sm object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <button
          onClick={handleScrollToButtons}
          className="mt-3.5 w-[75%] max-w-[432px] bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-zinc-950 font-black py-3.5 px-6 rounded-full shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:shadow-[0_0_35px_rgba(250,204,21,0.9)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer outline-none relative overflow-hidden text-sm sm:text-base md:text-lg tracking-wider uppercase border-2 border-yellow-300 animate-pulse"
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white/40 rounded-t-full pointer-events-none" />
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-950 stroke-[3] z-10 animate-bounce" />
          <span className="z-10 font-black tracking-tight drop-shadow-2xs">ENTRAR AGORA</span>
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-950 stroke-[3] z-10 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

