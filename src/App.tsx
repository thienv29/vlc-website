import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactInfo from './components/ContactInfo';
import LeadershipQuotes from './components/LeadershipQuotes';
import Post from './components/Post';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Sustainability from './components/Sustainability';
import PostDetail from './components/PostDetail';
import PostDetailStatic from './components/PostDetailStatic';
import PostInternal from './components/PostInternal';
import PostCommunity from './components/PostCommunity';
import Careers from './components/Careers';
import JobDetail from './components/JobDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import Testimonials from './components/Testimonials';
import ProjectShowcase from './components/ProjectShowcase';
import ScrollToTop from './components/ScrollToTop';
import EditorPage from './components/EditorPage';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

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
                <Post />
                <Partners />
                <CTA />
              </>
            } />
            <Route path="/about" element={<About fullPage />} />
            <Route path="/services" element={<Services fullPage />} />
            <Route path="/projects" element={<Projects fullPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/news" element={<Post fullPage />} />
            <Route path="/news/internal" element={<PostInternal />} />
            <Route path="/news/community" element={<PostCommunity />} />
            <Route path="/news/:id" element={<PostDetail showSidebar={true} />} />
            <Route path="/services/:id" element={<PostDetailStatic />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetail />} />
            <Route path="/products" element={<Products fullPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact fullPage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Chatbox />
      </div>
    </Router>
  );
}

export default App;
