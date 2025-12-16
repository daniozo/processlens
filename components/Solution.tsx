import React from 'react';
import { UploadCloud, Waypoints, SearchCheck, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

export const Solution: React.FC = () => {
  const steps = [
    {
      icon: <UploadCloud className="w-8 h-8 text-cyan-400" />,
      title: "1. Ingestion",
      desc: "Connexion aux données opérationnelles (CSV, SQL, API). Flux, temps, états.",
    },
    {
      icon: <Waypoints className="w-8 h-8 text-indigo-400" />,
      title: "2. Modélisation",
      desc: "Reconstruction automatique des processus réels (pas ceux imaginés).",
    },
    {
      icon: <SearchCheck className="w-8 h-8 text-purple-400" />,
      title: "3. Détection",
      desc: "Identification instantanée des goulots d'étranglement et variances.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-emerald-400" />,
      title: "4. Optimisation",
      desc: "Propositions de scénarios d'amélioration et suivi en temps réel.",
    },
  ];

  return (
    <section id="solution" className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-cyan-500 font-semibold tracking-wide uppercase text-sm mb-3">La Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Une analyse continue et intelligente
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nous remplaçons l'audit ponctuel par un SaaS de surveillance 24/7.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 0.2}>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};