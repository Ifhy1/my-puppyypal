import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <h1> Hello World! </h1>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
      
  );
}

export default App;
