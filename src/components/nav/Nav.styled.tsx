import { styled } from "styled-components";

import { Props } from "./Nav";

export const NavStyled = styled.header<Partial<Props>>`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.navVisible ? 101 : 90)};
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.4);

  .logo {
    a {
      img {
        width: 120px;
        cursor: pointer;
      }
    }
  }

  .nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .hamburger {
      margin: 20px;
      width: 45px;
      height: 35px;
      display: flex;
      justify-content: ${(props) => (props.modal ? "center" : "space-between")};
      align-items: center;
      flex-direction: column;
      display: none;
      z-index: 999;

      span {
        width: 100%;
        height: 4px;
        background-color: #fff;
        border-radius: 4px;
        transition: all 0.3s ease-in-out;

        &:nth-child(2) {
          opacity: ${(props) => (props.modal ? 0 : 1)};
        }

        &:nth-child(1) {
          transform: ${(props) =>
            props.modal ? "rotateZ(45deg) translateX(6px)" : "rotateX(0deg)"};
        }
        &:nth-child(3) {
          transform: ${(props) =>
            props.modal
              ? "rotateZ(135deg)  translateX(-6px)"
              : "rotateX(0deg)"};
        }
      }
    }

    ul {
      display: flex;

      li {
        list-style: none;
        margin-left: 50px;
        position: relative;
        transition: all;

        &::before {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 20px;
          height: 4px;
          background-color: whitesmoke;
          border-radius: 4px;
          transition: all 0.3s ease-in-out;
        }

        &:hover::before {
          content: "";
          width: 100%;
          transition: all 0.3s ease-in-out;
        }

        a {
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: bold;
          color: whitesmoke;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    backdrop-filter: none;
    background: transparent;

    .logo {
      display: none;
    }

    .nav ul {
      display: none;
    }

    .nav .hamburger {
      display: flex;
    }
  }
`;
