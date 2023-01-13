import React from 'react'
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default Home