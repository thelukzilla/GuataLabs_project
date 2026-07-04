import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const { projects } = siteContent;

  return (
    <section id="projetos" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-guata-dark mb-6"
          >
            {projects.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-guata-black/80 text-xl leading-relaxed"
          >
            {projects.intro}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-guata-black/5 hover:border-guata-light transition-colors flex flex-col h-full group"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl font-bold text-guata-dark">
                    {project.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-guata-olive">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <p className="text-guata-black/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {project.ethicsNote && (
                  <div className="mb-6 p-4 bg-guata-olive/10 rounded-xl text-sm text-guata-dark font-medium border border-guata-olive/20">
                    {project.ethicsNote}
                  </div>
                )}
                
                <div className="mb-8 border-l-2 border-guata-olive pl-4 py-1">
                  <p className="text-guata-darker font-semibold">
                    {project.impactText}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-[10px] bg-guata-offwhite px-2 py-1 rounded text-guata-olive font-bold uppercase tracking-wider"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
