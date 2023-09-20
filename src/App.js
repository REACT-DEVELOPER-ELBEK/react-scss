import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import About from './components/about/About';
import Services from './components/servicesp/Services';
import Covid from './components/covid/Covid';
import Article from './components/article/Article';
import Contact from './components/contact/Contact';
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
    </div>
  );
}

export default App;
