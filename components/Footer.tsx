import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">ProcessLens</h3>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          La solution qui transforme les données dormantes des PME marocaines en gains de productivité immédiats.
        </p>
        <div className="flex justify-center gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
        </div>
        <div className="mt-8 text-xs text-slate-600">
          &copy; {new Date().getFullYear()} ProcessLens. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};