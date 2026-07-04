import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';

export default function MissionValues() {
  const { missionVision, values } = siteContent;

  return (
    <section id="valores" className="py-24 md:py-32 bg-guata-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-guata-light font-bold tracking-widest uppercase text-sm mb-4">
              {missionVision.mission.title}
            </h2>
            <p className="text-3xl md:text-4xl font-display font-medium leading-tight mb-6">
              {missionVision.mission.text}
            </p>
            <p className="text-guata-light/70 font-medium">
              {missionVision.mission.short}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-guata-light font-bold tracking-widest uppercase text-sm mb-4">
              {missionVision.vision.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
              {missionVision.vision.text}
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {values.title}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.items.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-guata-light hover:bg-white/10 transition-colors"
              >
                <div className="text-guata-light font-bold text-lg mb-3">
                  {index + 1}. {value.title}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
