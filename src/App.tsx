import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Reservations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
