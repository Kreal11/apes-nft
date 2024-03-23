import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import { HeaderHeroWrapper } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <HeaderHeroWrapper>
        <Header />
        <Hero />
      </HeaderHeroWrapper>
      <About />
    </div>
  );
};

export default Home;
