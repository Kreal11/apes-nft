import About from "../../components/about/About";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
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
    </div>
  );
};

export default Home;
