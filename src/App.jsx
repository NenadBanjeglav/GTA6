import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "./sections/Nav.jsx";
import Hero from "./sections/Hero.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
};

export default App;
