import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Fundadores', href: '#fundadores' },
    { name: 'Valores', href: '#valores' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-guata-dark/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo minimalista */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-guata-light transition-colors">
            guatá<span className="font-light opacity-80 ml-1 text-sm tracking-[0.2em] uppercase">labs</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#projetos"
            className="px-4 py-2 text-xs bg-guata-olive text-white rounded-full transition-all hover:bg-guata-light"
          >
            Conheça nossos projetos
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-guata-dark border-t border-white/10 shadow-xl">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-white/80 hover:text-white text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <a
                href="#projetos"
                className="inline-block w-full text-center px-4 py-3 bg-guata-olive text-white rounded-full font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conheça nossos projetos
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
