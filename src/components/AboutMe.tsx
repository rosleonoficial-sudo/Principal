import React from "react";
import { ShieldCheck, Award, Sparkles, UserCheck } from "lucide-react";

export default function AboutMe() {
  const PHOTO_SRC = "/rosleon-about.webp";

  return (
    <section 
      id="quem-eu-sou"
      className="w-full bg-zinc-900 text-white py-6 sm:py-8 px-4 border-t border-b border-zinc-800"
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
        
        {/* Profile Photo Container - View-only, no upload or editing interactions */}
        <div className="relative shrink-0 flex flex-col items-center">
          <div 
            className="relative w-32 h-44 sm:w-36 sm:h-48 rounded-2xl overflow-hidden border-2 border-amber-400/90 shadow-2xl bg-zinc-950 flex items-center justify-center select-none"
          >
            <img 
              src={PHOTO_SRC} 
              alt="Leonardo Mey - ROSLEON" 
              className="w-full h-full object-cover object-top select-none pointer-events-none"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              referrerPolicy="no-referrer"
              width={144}
              height={192}
            />

            {/* Silver Partner Badge */}
            <div className="absolute bottom-1 right-1 bg-amber-400 text-zinc-950 p-1 rounded-full shadow-lg border border-zinc-900 pointer-events-none" title="Parceiro Nível Prata">
              <Award className="w-3.5 h-3.5" />
            </div>
          </div>

          <span className="mt-2 text-[10px] font-bold text-amber-400 tracking-tight uppercase flex items-center gap-1 select-none">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Parceiro Prata Mercado Livre</span>
          </span>
        </div>

        {/* Text Content Block */}
        <div className="flex-1 text-center sm:text-left">
          
          {/* Section Title */}
          <h2 className="font-display font-black text-sm sm:text-base text-amber-400 uppercase tracking-tight mb-2.5 flex items-center justify-center sm:justify-start gap-1.5">
            <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>QUEM EU SOU E COMO CONSIGO ESSAS PROMOÇÕES:</span>
          </h2>

          {/* Body Text */}
          <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Sou parceiro gerenciado do Mercado Livre nível prata e tenho acesso a campanhas, cupons e ofertas divulgados em canais específicos, que nem sempre aparecem no site ou aplicativo.
            </p>
            <p>
              Todas as promoções são selecionadas manualmente, uma por uma. Nada é publicado por inteligência artificial: escolho a dedo o que realmente vale a pena compartilhar.
            </p>
          </div>

          {/* Key Badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[10px] sm:text-xs font-semibold text-zinc-400">
            <span className="bg-amber-400/10 text-amber-300 px-2.5 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Seleção 100% Manual
            </span>
            <span className="bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full border border-zinc-700">
              Ofertas e Cupons Exclusivos
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
