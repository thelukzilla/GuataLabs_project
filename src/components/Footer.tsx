import React from 'react';
import { siteContent } from '../data/siteContent';

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-white py-8 border-t border-guata-black/5 text-guata-black/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-display font-bold text-xl tracking-tight text-guata-dark">
            guatá<span className="font-light opacity-80 ml-1 text-xs tracking-[0.2em] uppercase">labs</span>
          </div>
          <p className="text-xs">
            {footer.tagline}
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider">
          <li>
            <a href="#projetos" className="hover:text-guata-dark transition-colors">Projetos</a>
          </li>
          <li>
            <a href="#fundadores" className="hover:text-guata-dark transition-colors">Fundadores</a>
          </li>
          <li>
            <a href="#valores" className="hover:text-guata-dark transition-colors">Valores</a>
          </li>
          <li>
            <a href="#contato" className="hover:text-guata-dark transition-colors">Contato</a>
          </li>
        </ul>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6 pt-6 border-t border-guata-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-500">
          Guatá Labs &copy; {new Date().getFullYear()} &bull; {footer.subtext}
        </p>
        <div className="flex gap-4 grayscale opacity-50">
          <a href="#" className="text-[10px] font-bold hover:opacity-100 transition-opacity">INSTAGRAM</a>
          <a href="#" className="text-[10px] font-bold hover:opacity-100 transition-opacity">LINKEDIN</a>
          <a href="#" className="text-[10px] font-bold hover:opacity-100 transition-opacity">GITHUB</a>
        </div>
      </div>
    </footer>
  );
}
