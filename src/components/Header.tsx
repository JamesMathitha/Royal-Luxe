import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <UtensilsCrossed className="h-8 w-8 text-amber-400" />
            <div>
              <h1 className="text-2xl font-serif font-bold text-white">Royal Luxe</h1>
              <p className="text-xs text-amber-400">Luxury Redefined</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
              Menu
            </button>
            <button onClick={() => scrollToSection('reservations')} className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
              Reservations
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
              Contact
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors py-2">
              Menu
            </button>
            <button onClick={() => scrollToSection('reservations')} className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors py-2">
              Reservations
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-amber-400 transition-colors py-2">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
