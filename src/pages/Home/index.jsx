import { useEffect } from "react";

import IntroSequence from "../../components/IntroSequence";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Formations from "../../components/Formations";
import Tutors from "../../components/Tutors";
import Voices from "../../components/Voices";
import Companies from "../../components/Companies";
import StudentArea from "../../components/StudentArea";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";
import StoryGuide from "../../components/StoryGuide";
import WhatsAppButton from "../../components/WhatsAppButton";
import AboutPanel from "../../components/AboutPanel";

import {
  Container,
  HeroStage,
} from "./styles";

function Home() {
  useEffect(() => {
    const previousScrollRestoration =
      window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    return () => {
      window.history.scrollRestoration =
        previousScrollRestoration;
    };
  }, []);

  return (
    <Container>
      <Header />

      <HeroStage>
        <IntroSequence />

        <Hero />

        <StoryGuide />
      </HeroStage>

      <Formations />

      <Tutors />

      <Voices />

      <Companies />

      <StudentArea />

      <Partners />

      <Footer />

      <WhatsAppButton />

      <AboutPanel />
    </Container>
  );
}

export default Home;