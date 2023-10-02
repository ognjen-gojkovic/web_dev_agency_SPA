import { HomeStyled } from "./HomeStyled";
import { Fade } from "react-awesome-reveal";
import HomeVideo from "./../../assets/globeVid.mp4";

const Home = () => {
  return (
    <Fade triggerOnce className="home-fade">
      <HomeStyled id="home">
        <video autoPlay loop muted>
          <source src={HomeVideo} type="video/mp4" />
          Your browser doesn't support video tags.
        </video>
        <div className="content">
          <h1>
            We build software tailored for
            <br />
            your needs.
          </h1>
          <p>
            We are talented team of software developers that skillfully tailor
            <br />
            code to fit your vision of your future.
          </p>
          <div className="btns">
            <a href="#work">Our Work</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </HomeStyled>
    </Fade>
  );
};

export default Home;
