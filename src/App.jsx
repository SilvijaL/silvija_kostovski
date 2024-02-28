import { BrowserRouter } from 'react-router-dom'; 
import { About, Contact, Footer, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
 
const App = () => { 

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#DDDDDD]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0 bg-[#283640]">
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
