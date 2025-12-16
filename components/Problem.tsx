import React from 'react';
import { Database, FileSearch, TrendingDown } from 'lucide-react';
import { Reveal } from './Reveal';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">Le Problème</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pourquoi perdez-vous du temps ?
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Les PME modernes sont numérisées mais aveugles. Elles investissent dans la collecte de données, mais échouent dans l'analyse.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={0.2}>
            <div className="h-full p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Le Paradoxe de la Donnée</h4>
              <p className="text-slate-400 leading-relaxed">
                <span className="text-white italic">"Data Rich, Insight Poor"</span>. Vous avez des ERP, des capteurs, des logs. Vous "nagez" dans la donnée, mais êtes incapables de visualiser le flux réel de bout en bout.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="h-full p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileSearch className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">L'Échec de l'Audit Manuel</h4>
              <p className="text-slate-400 leading-relaxed">
                Les solutions actuelles ? Des consultants et des tableaux Excel géants. C'est <span className="text-white font-medium">coûteux, lent</span> et obsolète avant même d'avoir fini le rapport. Une photo floue à un instant T.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="h-full p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingDown className="w-7 h-7 text-red-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">La Marge Perdue</h4>
              <p className="text-slate-400 leading-relaxed">
                Le résultat n'est pas juste un retard, c'est de l'argent perdu. Une machine qui attend, un dossier bloqué = client mécontent. Des goulots invisibles grignotent <span className="text-white font-medium">10 à 20% de votre productivité</span> chaque jour.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};