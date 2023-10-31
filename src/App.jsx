import Navbar from './component/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Work from './sections/Work';
import Footer from './component/Footer';

function App() {
  return (
    <main className="bg-white">
      <Navbar />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
