// App.jsx
// src/App.jsx

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import About from "./components/AboutSection"
import ServicesSlider from "./components/ServicesSlider";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "../src/components/WhyChooseUs"
function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
      <About />
      <ServicesSlider />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

export default App;
