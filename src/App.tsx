import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Sustainability from './components/Sustainability';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F7FA]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <Projects />
                <News />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About fullPage />} />
            <Route path="/services" element={<Services fullPage />} />
            <Route path="/projects" element={<Projects fullPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/news" element={<News fullPage />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact fullPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbox />
      </div>
    </Router>
  );
}

export default App;
