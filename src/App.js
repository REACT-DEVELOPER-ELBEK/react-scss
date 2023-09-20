import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import About from './components/about/About';
import Services from './components/servicesp/Services';
import Covid from './components/covid/Covid';
import Article from './components/article/Article';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Links from './components/footerlinks/Links';
function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Covid />
      <Article />
      <Contact />
      <Footer />
      <Links />
    </div>
  );
}

export default App;
