import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { NavBar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Services />
      <Gallery />
      <Process />
      <Contact />
    </div>
  );
}

export default App;