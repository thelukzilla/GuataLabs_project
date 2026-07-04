import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { Compass, Lightbulb, Users, Code, Target } from 'lucide-react';

export default function About() {
  const { whyWeExist, whatIsGuata } = siteContent;

  const cardIcons = [
    <Code className="w-6 h-6 text-guata-olive" />,
    <Users className="w-6 h-6 text-guata-olive" />,
    <Compass className="w-6 h-6 text-guata-olive" />,
    <Lightbulb className="w-6 h-6 text-guata-olive" />,
    <Target className="w-6 h-6 text-guata-olive" />
  ];

  return (
    <section id="sobre" className="bg-guata-offwhite py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Por que existimos */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-guata-dark mb-6 leading-tight">
              {whyWeExist.title}
            </h2>
            <p className="text-guata-black/80 text-lg mb-6 leading-relaxed">
              {whyWeExist.text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-guata-black/5 relative"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-guata-olive rounded-l-3xl"></div>
            <p className="text-xl md:text-2xl font-medium text-guata-darker leading-relaxed mb-6">
              "{whyWeExist.impactText}"
            </p>
            <p className="text-guata-olive font-bold text-lg">
              {whyWeExist.closing}
            </p>
          </motion.div>
        </div>

        {/* O que é a Guatá Labs */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-guata-dark mb-6"
          >
            {whatIsGuata.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-guata-black/80 text-lg leading-relaxed"
          >
            {whatIsGuata.text}
          </motion.p>
        </div>

        {/* Cards curtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIsGuata.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 rounded-2xl shadow-sm border border-guata-black/5 flex items-start gap-4 hover:border-guata-light transition-colors group"
            >
              <div className="p-3 bg-guata-offwhite rounded-xl group-hover:bg-guata-light/20 transition-colors">
                {cardIcons[index % cardIcons.length]}
              </div>
              <p className="font-medium text-guata-dark pt-1">
                {card}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
