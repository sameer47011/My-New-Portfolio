
// import './App.css'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'
// import Projects from './components/Projects'
// import Service from './components/Service'

// function App() {

//   return (
//     <div>
//         <Navbar />
//         <Hero />
//         <About />
//         <Service />
//         <Projects />
//         <Contact />
//         <Footer />
//     </div>
//   )
// }

// export default App



import React, { useRef } from 'react'; // Import useRef
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

function App() {
  const contactRef = useRef(null); // Create a reference for the Contact component

  const handleContactClick = () => {
    // Scroll to the Contact section smoothly
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Hero onContactClick={handleContactClick} /> {/* Pass the click handler */}
      <About />
      <Service />
      <Projects />
      <Contact ref={contactRef} /> {/* Attach the reference to the Contact component */}
      <Footer />
    </div>
  );
}

export default App;
