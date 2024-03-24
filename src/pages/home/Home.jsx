import About from "../../components/about/About";
import Container from "../../components/container/Container";
import FAQ from "../../components/faq/FAQ";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import MindMap from "../../components/mind-map/MindMap";
import { HeaderHeroWrapper } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <Container>
        <HeaderHeroWrapper>
          <Header />
          <Hero />
        </HeaderHeroWrapper>
      </Container>
      <About />
      <MindMap />
      <FAQ />
    </div>
  );
};

export default Home;
