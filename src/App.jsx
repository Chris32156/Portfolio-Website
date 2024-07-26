import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Stars from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patteren bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/*<Feedbacks /> */}
        <Contact />
        <Stars />
      </div>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
