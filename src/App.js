
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsAppFloat from './components/WhatsAppFloat';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Profile />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
