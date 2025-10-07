import { UtensilsCrossed, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <UtensilsCrossed className="h-8 w-8 text-amber-400" />
              <div>
                <h3 className="text-xl font-serif font-bold">Royal Luxe</h3>
                <p className="text-xs text-amber-400">Luxury Redefined</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Indulge in the world's most luxurious culinary experiences, where every dish is a masterpiece.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-amber-400 transition-colors">Reservations</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Central Business District<br />
              Gaborone, Botswana<br />
              (+267) 71 298 296
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Royal Luxe Restaurant. All rights reserved.</p>
          <p className="mt-2">Developed by <span className="text-amber-400 font-semibold">James Mathitha</span></p>
        </div>
      </div>
    </footer>
  );
}
