import React from "react";
import { HamburgerMenuStyled } from "./HamburgerMenu.styled";

interface Props {
  handleModal: () => void;
}

const HamburgerMenu: React.FC<Props> = ({ handleModal }) => {
  return (
    <HamburgerMenuStyled>
      <ul>
        <li>
          <a href="#" onClick={() => handleModal()}>
            Home
          </a>
        </li>
        <li>
          <a href="#about-us" onClick={() => handleModal()}>
            About Us
          </a>
        </li>
        <li>
          <a href="#work" onClick={() => handleModal()}>
            Our Work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleModal()}>
            Contact
          </a>
        </li>
      </ul>
    </HamburgerMenuStyled>
  );
};

export default HamburgerMenu;
