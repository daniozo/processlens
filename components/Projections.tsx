import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MapPin, Users, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

const data = [
  { name: 'Année 1', revenue: 0.7, label: '700k DH' },
  { name: 'Année 2', revenue: 3.6, label: '3.6M DH' },
];

export const Projections: React.FC = () => {
  return (
    <section id="growth" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-emerald-500 font-semibold tracking-wide uppercase text-sm mb-3">Croissance</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Go-to-Market & Projections
            </h3>
            <p className="text-slate-400">Stratégie terrain et traction financière.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Strategy */}
          <div className="space-y-8">
             <Reveal delay={0.2}>
              <h4 className="text-xl font-bold text-white mb-6">Stratégie d'Acquisition (3 Piliers)</h4>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex gap-4">
                <div className="bg-emerald-500/10 p-3 rounded-lg h-fit">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg">Zones Industrielles</h5>
                  <p className="text-slate-400 text-sm mt-1">Approche directe à Tanger, Kénitra, Casa. Ciblage physique des directeurs d'usine.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex gap-4 mt-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg h-fit">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg">Partenariats Intégrateurs (Levier)</h5>
                  <p className="text-slate-400 text-sm mt-1">Alliances avec revendeurs Sage/SAP/Odoo. Nous sommes le complément "Analytics" à leur offre ERP.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex gap-4 mt-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg h-fit">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg">POC "Flash"</h5>
                  <p className="text-slate-400 text-sm mt-1">Audit 1 mois via l'offre Starter pour prouver la valeur et convertir en contrat annuel.</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Chart */}
          <div className="h-full min-h-[400px]">
            <Reveal delay={0.4}>
              <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 h-full flex flex-col justify-center">
                <h4 className="text-xl font-bold text-white mb-2 text-center">Revenue Prévisionnel (DH)</h4>
                <p className="text-center text-slate-400 text-sm mb-8">De la traction au scale</p>
                
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis 
                        dataKey="name" 
                        stroke="#94a3b8" 
                        tick={{fill: '#94a3b8'}} 
                        axisLine={{stroke: '#475569'}}
                      />
                      <YAxis 
                        stroke="#94a3b8" 
                        tick={{fill: '#94a3b8'}}
                        axisLine={{stroke: '#475569'}}
                        tickFormatter={(value) => `${value}M`}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                        formatter={(value: number) => [`${value}M DH`, 'Revenue']}
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                      />
                      <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#4f46e5' : '#06b6d4'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6 flex justify-between text-sm border-t border-slate-700 pt-4">
                  <div className="text-center w-1/2 border-r border-slate-700">
                    <span className="block text-slate-500 uppercase text-xs font-semibold">Année 1</span>
                    <span className="block text-white font-bold text-lg">15 Clients</span>
                    <span className="text-emerald-400 text-xs">Product Market Fit</span>
                  </div>
                  <div className="text-center w-1/2">
                    <span className="block text-slate-500 uppercase text-xs font-semibold">Année 2</span>
                    <span className="block text-white font-bold text-lg">50 Clients</span>
                    <span className="text-cyan-400 text-xs">Rentabilité</span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};