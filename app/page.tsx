import { Header } from "./components/Header";
import { HomeHero } from "./components/HomeHero";
import Icons from "./components/Icons";
import Portfolio from "./components/Portfolio";
import { Skills } from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <Icons />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}
