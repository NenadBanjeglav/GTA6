import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "./sections/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";
import Lucia from "./sections/Lucia.jsx";
import PostCard from "./sections/PostCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <PostCard />
    </main>
  );
};

export default App;
