import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Sustainability from './components/Sustainability';
import News from './components/News';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Projects />
            <News />
            <Contact />
          </>
        );
      case 'about':
        return <About fullPage />;
      case 'services':
        return <Services fullPage />;
      case 'projects':
        return <Projects fullPage />;
      case 'sustainability':
        return <Sustainability />;
      case 'news':
        return <News fullPage />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact fullPage />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Chatbox />
    </div>
  );
}

export default App;
