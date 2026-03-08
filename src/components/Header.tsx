import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/adimAndFamily/logo.png"
              alt="Adim & Family Investments logo"
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">ADIM & FAMILY</h1>
              <p className="text-xs text-red-600 font-semibold">INVESTMENTS CO. LTD</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-600 transition">Services</button>
            <button onClick={() => scrollToSection('objectives')} className="text-gray-700 hover:text-red-600 transition">Objectives</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition">Contact</button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-red-600 transition py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-red-600 transition py-2">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-red-600 transition py-2">Services</button>
            <button onClick={() => scrollToSection('objectives')} className="block w-full text-left text-gray-700 hover:text-red-600 transition py-2">Objectives</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-red-600 transition py-2">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}
