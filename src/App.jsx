import { Analytics } from "@vercel/analytics/react"
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import CaseStudy from "./components/CaseStudy";
import Collaboration from "./components/Collaboration";
import CommandPalette from "./components/CommandPalette";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageIntro from "./components/PageIntro";
import Skills from "./components/Skills";
import SmoothScroll from "./components/SmoothScroll";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <>
      <SmoothScroll />
      <PageIntro />
      <CursorGlow />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <CaseStudy />
        <Timeline />
        <Skills />
        <Collaboration />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
      <CommandPalette />
      <Analytics/>
    </>
  );
};

export default App;
