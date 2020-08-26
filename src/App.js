import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    )
  }
}


export default App;
