import React from 'react';
import './App.css';

import Topbar from './components/Topbar/Topbar';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CallToAction from './components/CallToAction/CallToAction';
import AboutUs from './components/AboutUs/AboutUs';
import Stats from './components/Stats/Stats';
import Industries from './components/Industries/Industries';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Topbar />
      <HeaderInfo />
      <Navbar />
      <Hero />
      <CallToAction />
      <AboutUs />
      <Stats />
      <Industries />
      <Team />
      <Contact />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
