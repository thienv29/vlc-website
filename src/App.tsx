import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactInfo from './components/ContactInfo';
import LeadershipQuotes from './components/LeadershipQuotes';
import News from './components/News';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Sustainability from './components/Sustainability';
import NewsDetail from './components/NewsDetail';
import NewsDetailStatic from './components/NewsDetailStatic';
import NewsInternal from './components/NewsInternal';
import NewsCommunity from './components/NewsCommunity';
import Careers from './components/Careers';
import JobDetail from './components/JobDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import Testimonials from './components/Testimonials';
import ProjectShowcase from './components/ProjectShowcase';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <ProjectShowcase />
                <Services />
                <Testimonials />
                <ContactInfo />
                <LeadershipQuotes />
                <News />
                <Partners />
                <CTA />
              </>
            } />
            <Route path="/about" element={<About fullPage />} />
            <Route path="/services" element={<Services fullPage />} />
            <Route path="/projects" element={<Projects fullPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/news" element={<News fullPage />} />
            <Route path="/news/internal" element={<NewsInternal />} />
            <Route path="/news/community" element={<NewsCommunity />} />
            <Route path="/news/:id" element={<NewsDetail showSidebar={true} />} />
            <Route path="/services/:id" element={<NewsDetailStatic />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetail />} />
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
