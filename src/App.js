import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import smoothscroll from 'smoothscroll-polyfill';

function App() {
  smoothscroll.polyfill();
  return (
    <div id="main">
      <Nav/>
      <Hero/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0c1445" preserveAspectRatio="none" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,256C672,256,768,224,864,176C960,128,1056,64,1152,42.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <About/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0c1445" preserveAspectRatio="none" fillOpacity="1" d="M0,320L40,309.3C80,299,160,277,240,272C320,267,400,277,480,245.3C560,213,640,139,720,133.3C800,128,880,192,960,202.7C1040,213,1120,171,1200,165.3C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <Experience/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0c1445" preserveAspectRatio="none" fillOpacity="1" d="M0,96L40,101.3C80,107,160,117,240,149.3C320,181,400,235,480,224C560,213,640,139,720,112C800,85,880,107,960,133.3C1040,160,1120,192,1200,208C1280,224,1360,224,1400,224L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      <Portfolio/>
    </div>
  );
}

export default App;
