import React from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">Modèle Économique</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Tarification SaaS simple
            </h3>
            <p className="text-slate-400">
              Pas de factures surprises. Abonnement mensuel récurrent (MRR).
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Starter */}
          <Reveal delay={0.2}>
            <div className="h-full p-8 rounded-2xl bg-slate-800/30 border border-slate-700 flex flex-col hover:border-slate-500 transition-colors">
              <h4 className="text-xl font-semibold text-white mb-2">Starter</h4>
              <p className="text-slate-400 text-sm mb-6 h-10">Pour petites structures ou tests.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">2 500</span>
                <span className="text-slate-400 text-sm"> MAD / mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300 text-sm">Ingestion manuelle (CSV/Excel)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300 text-sm">1 Processus modélisé</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300 text-sm">Mise en place rapide</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-slate-600 text-white font-medium hover:bg-slate-700 transition-colors">
                Contacter
              </button>
            </div>
          </Reveal>

          {/* Pro - Highlighted */}
          <Reveal delay={0.4}>
            <div className="h-full p-8 rounded-2xl bg-slate-800/80 border border-indigo-500 shadow-2xl shadow-indigo-500/10 flex flex-col relative transform md:-translate-y-4 md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Cœur de Cible
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Pro</h4>
              <p className="text-slate-300 text-sm mb-6 h-10">PME Industrielles & Logistiques établies.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-indigo-400">6 000</span>
                <span className="text-slate-400 text-sm"> MAD / mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-white text-sm">Connexion API / DB Automatisée</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-white text-sm">Analyse continue 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-white text-sm">Alertes Goulots Temps Réel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-white text-sm">ROI Immédiat</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25">
                Demander une démo
              </button>
            </div>
          </Reveal>

          {/* Enterprise */}
          <Reveal delay={0.6}>
            <div className="h-full p-8 rounded-2xl bg-slate-800/30 border border-slate-700 flex flex-col hover:border-slate-500 transition-colors">
              <h4 className="text-xl font-semibold text-white mb-2">Entreprise</h4>
              <p className="text-slate-400 text-sm mb-6 h-10">Grandes industries multi-sites.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">Sur Devis</span>
                <span className="text-slate-400 text-sm block">> 15 000 MAD</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300 text-sm">Déploiement On-Premise (Sécurité)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300 text-sm">Volume de données illimité</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-300 text-sm">Support Dédié</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-slate-600 text-white font-medium hover:bg-slate-700 transition-colors">
                Contact
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};