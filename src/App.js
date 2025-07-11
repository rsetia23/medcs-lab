import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import People from './components/People'; 
import Footer from './components/footer';
import './styles.css';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <People />
      <Footer />
    </div>
  );
}

export default App;
