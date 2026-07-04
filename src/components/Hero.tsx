import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-guata-dark overflow-hidden pt-20">
      {/* Elemento de fundo sutil */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-guata-olive)_0%,transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Placeholder para Logo do Lobo Guará (Pode ser substituída pela imagem real em /public) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <img 
            src="/logo-guata-labs.png" 
            alt="Guatá Labs Lobo Guará" 
            className="h-32 md:h-48 object-contain drop-shadow-xl"
            onError={(e) => {
              // Fallback caso a imagem não exista
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `
                <div class="h-32 md:h-48 w-32 md:w-48 rounded-full border border-guata-light/30 flex items-center justify-center bg-white/5">
                  <span class="font-display font-bold text-5xl text-guata-light">g</span>
                </div>
              `;
            }}
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="text-guata-light font-mono text-xs uppercase tracking-widest mb-4 block"
        >
          Startup & University Studio
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
        >
          {hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-guata-light font-medium max-w-3xl mb-8"
        >
          {hero.subtitle}
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a 
            href="#projetos"
            className="px-6 py-3 bg-white text-guata-dark font-bold rounded-lg hover:bg-gray-100 transition-colors text-center"
          >
            Conheça os projetos
          </a>
          <a 
            href="#contato"
            className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/5 transition-colors text-center"
          >
            Fale com a gente
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <p className="text-white/40 text-sm tracking-widest uppercase font-medium">
            {hero.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
