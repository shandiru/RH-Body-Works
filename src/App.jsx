// App.jsx
// src/App.jsx

import Navbar from "./components/Navbar";
import About from "./components/AboutSection"
import ServicesSlider from "./components/ServicesSlider";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <About />
      <ServicesSlider />
      <Testimonials />
    </>
  );
}

export default App;
