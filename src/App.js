import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Profiles from "./components/Profiles";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div classname="App">
      <Header />
      <Welcome />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Profiles />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
