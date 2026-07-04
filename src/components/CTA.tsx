import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';

export default function CTA() {
  const { cta } = siteContent;

  return (
    <section id="contato" className="bg-guata-dark text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-guata-olive rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Mensagem Emocional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-guata-light">
            {cta.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            {cta.text}
          </p>
          <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm mx-auto max-w-3xl">
            <p className="text-xl md:text-2xl font-medium text-white mb-4">
              "{cta.impactText}"
            </p>
            <p className="text-guata-light font-bold text-xl uppercase tracking-wider">
              {cta.closing}
            </p>
          </div>
        </motion.div>

        {/* Call to Action Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {cta.actionTitle}
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            {cta.actionText}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href={cta.links.email}
              className="w-full sm:w-auto px-6 py-3 bg-white text-guata-dark font-bold rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Falar com a Guatá Labs
            </a>
            <a 
              href="#projetos"
              className="w-full sm:w-auto px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/5 transition-colors text-center"
            >
              Conhecer projetos
            </a>
            <a 
              href={cta.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-medium rounded-full hover:text-guata-light transition-colors text-center underline underline-offset-4 decoration-white/30 hover:decoration-guata-light"
            >
              Acompanhar no Instagram
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
