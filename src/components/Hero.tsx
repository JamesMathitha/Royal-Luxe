import { ChefHat } from 'lucide-react';

export default function Hero() {
  const scrollToReservations = () => {
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <ChefHat className="h-20 w-20 text-amber-400 mx-auto mb-6 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Royal Luxe
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Where Opulence Meets Exquisite Gastronomy
        </p>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Indulge in the world's most luxurious culinary experiences. From rare delicacies to prestigious vintages,
          every dish is a masterpiece crafted for the most discerning palates.
        </p>
        <button
          onClick={scrollToReservations}
          className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
        >
          Reserve Your Table
        </button>
      </div>
    </section>
  );
}
