import React from 'react';
import { ArrowRight, BarChart3, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Pour PME Industrielles & Logistiques
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Transformez vos données <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              dormantes
            </span>{" "}
            en productivité.
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Vos machines génèrent des données. Vos équipes génèrent des logs.
            Pourtant, vous pilotez encore à l'intuition. Arrêtez de perdre 
            <span className="text-white font-semibold"> 10 à 20% de marge </span> 
            à cause de goulots d'étranglement invisibles.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#solution"
              className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25 flex items-center gap-2"
            >
              Découvrir la solution <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-lg transition-all flex items-center gap-2"
            >
              Voir les tarifs
            </a>
          </div>
        </Reveal>

        {/* Abstract dashboard representation */}
        <Reveal delay={0.7}>
          <div className="mt-16 relative mx-auto w-full max-w-4xl bg-slate-900/50 rounded-xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm p-4">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 h-32 md:h-64 opacity-80">
                <div className="bg-slate-800/50 rounded animate-pulse h-full"></div>
                <div className="bg-slate-800/30 rounded h-full flex items-end pb-4 px-2">
                    <div className="w-full bg-indigo-600/40 h-[60%] rounded-t"></div>
                </div>
                <div className="bg-slate-800/50 rounded h-full flex flex-col gap-2 p-2">
                    <div className="w-full bg-slate-700/50 h-8 rounded"></div>
                    <div className="w-3/4 bg-slate-700/50 h-4 rounded"></div>
                    <div className="w-full bg-slate-700/50 h-8 rounded mt-auto"></div>
                </div>
            </div>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};