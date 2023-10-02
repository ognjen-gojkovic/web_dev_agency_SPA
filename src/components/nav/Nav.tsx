import React from "react";
import { NavStyled } from "./Nav.styled";
import LogoCompany from "./../../assets/images/xyz_logo.svg";

export interface Props {
  navVisible: boolean;
  handleModal: () => void;
  modal: boolean;
}

const Nav: React.FC<Props> = ({ handleModal, modal, navVisible }) => {
  return (
    <NavStyled id="nav" navVisible={navVisible} modal={modal}>
      <div className="logo">
        <a href="#">
          <img src={LogoCompany} alt="logo-company" />
        </a>
      </div>
      <nav className="nav">
        <div className="hamburger" onClick={() => handleModal()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#work">Our Work</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </NavStyled>
  );
};
export default Nav;
