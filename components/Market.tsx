import React from 'react';
import { Target, Globe, Crosshair } from 'lucide-react';
import { Reveal } from './Reveal';

export const Market: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <Reveal>
            <div>
              <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">Opportunité de Marché</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Le "Mid-Market" est mal servi.
              </h3>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Les géants comme Celonis ciblent le CAC40 avec des tickets à 100k€.
                Excel ne suffit plus. Il reste un océan bleu : les PME.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1 mr-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                  </div>
                  <div>
                    <strong className="text-white block">PME Industrielles</strong>
                    <span className="text-slate-400 text-sm">Cherchent à optimiser le temps machine.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1 mr-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                  </div>
                  <div>
                    <strong className="text-white block">PME Logistiques</strong>
                    <span className="text-slate-400 text-sm">Se battent sur les délais de livraison.</span>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-8 text-center">Taille du Marché (TAM - SAM - SOM)</h4>
              
              <div className="space-y-8">
                {/* TAM */}
                <div className="relative group cursor-default">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-300 font-medium">TAM - Marché Total</span>
                    </div>
                    <span className="text-xs text-slate-500">Process Analytics Mondial (+40%/an)</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 w-full opacity-30"></div>
                  </div>
                </div>

                {/* SAM */}
                <div className="relative group cursor-default">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">SAM - Marché Adressable</span>
                    </div>
                    <span className="text-sm text-white font-bold">30k - 40k PME</span>
                  </div>
                  <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[65%] rounded-r-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">France & Europe (Industrie/Logistique)</p>
                </div>

                {/* SOM */}
                <div className="relative group cursor-default">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-2">
                      <Crosshair className="w-5 h-5 text-indigo-500" />
                      <span className="text-indigo-500 font-bold">SOM - Objectif 18 mois</span>
                    </div>
                    <span className="text-lg text-white font-bold">50 - 100 Clients</span>
                  </div>
                  <div className="w-full h-5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-[15%] rounded-r-full shadow-[0_0_20px_rgba(79,70,229,0.6)] animate-pulse"></div>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Standard de l'analyse accessible</p>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};