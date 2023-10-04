import React from "react";
import { styled } from "styled-components";
import { GlobalStyle } from "./utils/globalStyle";
import Nav from "./components/nav/Nav";
import Home from "./components/homeSection/Home";
import AboutUs from "./components/aboutUsSection/AboutUs";
import Work from "./components/workSection/Work";
import Contact from "./components/contactSection/Contact";
import HamburgerMenu from "./components/hamburgerMenu/HamburgerMenu";
import HomeWidget from "./components/homeWidget/HomeWidget";

function App(): React.ReactElement {
  const [navHidden, setNavHidden] = React.useState(true);
  const [modal, setModal] = React.useState(false);

  const handleNavVisible = () => {
    setNavHidden(!navHidden);
  };
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <AppStyled>
      <GlobalStyle />
      <Nav navVisible={navHidden} handleModal={handleModal} modal={modal} />
      {modal && <HamburgerMenu handleModal={handleModal} />}
      <Home />
      <AboutUs />
      <Work />
      <Contact handleNav={handleNavVisible} navVisible={navHidden} />
      <HomeWidget navHidden={navHidden} modal={modal} />
    </AppStyled>
  );
}

const AppStyled = styled.main`
  width: 100vw;
  height: 100%;
`;

export default App;
