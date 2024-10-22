
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



import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

function App() {
  

  return (
    <div>
      <Navbar />
      <Hero  /> {/* Pass the click handler */}
      <About />
      <Service />
      <Projects />
      <Contact  /> {/* Attach the reference to the Contact component */}
      <Footer />
    </div>
  );
}

export default App;
