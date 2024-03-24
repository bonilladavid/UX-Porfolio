import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

function App() {

  return (
    <div className="App">
      <Bio/>
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  )
}


export default App;