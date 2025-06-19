
import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Services from './components/Services.tsx';
import Gallery from './components/Gallery.tsx';
import Profile from './components/Profile.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
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
