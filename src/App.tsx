import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 antialiased selection:bg-brand-orange selection:text-white">
      
      {/* Navigation Desk */}
      <Navbar />

      {/* Hero Welcome Arena */}
      <Hero />

      {/* About Section */}
      <AboutUs />

      {/* Course Catalog (interactive grids and categorization filters) */}
      <Courses />

      {/* Core Advantages Checklists */}
      <WhyChooseUs />

      {/* Quick Contacts and Physical Campus Image Showcase */}
      <ContactUs />

      {/* Styled Geolocation map pin */}
      <GoogleMap />

      {/* Footnote details and configure instructions */}
      <Footer />

    </div>
  );
}
