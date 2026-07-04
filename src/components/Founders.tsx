import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { CheckCircle2 } from 'lucide-react';

export default function Founders() {
  const { founders } = siteContent;

  return (
    <section id="fundadores" className="bg-guata-offwhite py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-guata-dark mb-6"
          >
            {founders.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-guata-black/80 text-xl leading-relaxed"
          >
            {founders.intro}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {founders.items.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-guata-black/5 hover:border-guata-light transition-colors flex flex-col group"
            >
              {/* Imagem / Avatar Placeholder */}
              <div className="h-64 bg-guata-dark flex items-center justify-center relative overflow-hidden">
                {/* Fallback de iniciais se a imagem falhar */}
                <span className="font-display text-5xl text-guata-light opacity-50 absolute">
                  {founder.initials}
                </span>
                <img 
                  src={founder.image} 
                  alt={`Foto de ${founder.name}`}
                  className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-guata-dark mb-1">
                  {founder.name}
                </h3>
                <p className="text-guata-olive font-medium text-sm mb-6">
                  {founder.role}
                </p>

                <p className="text-guata-black/80 text-sm leading-relaxed mb-4">
                  {founder.description}
                </p>
                <p className="text-guata-black italic text-sm leading-relaxed mb-6">
                  {founder.humanText}
                </p>

                <div className="mt-auto pt-6 border-t border-guata-black/5">
                  <ul className="space-y-2">
                    {founder.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-guata-black/70">
                        <CheckCircle2 className="w-4 h-4 text-guata-light shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
