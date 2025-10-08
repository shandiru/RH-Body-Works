// App.jsx
// src/App.jsx

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import About from "./components/AboutSection"
import ServicesSlider from "./components/ServicesSlider";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "../src/components/WhyChooseUs"
import Footer from "../src/components/Footer"
function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
      <About />
      <ServicesSlider />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
