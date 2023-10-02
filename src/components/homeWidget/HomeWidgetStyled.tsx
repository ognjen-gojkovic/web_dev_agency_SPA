import styled from "styled-components";

import { Props, ComponentProps } from "./HomeWidget";

interface AllProps extends Props, ComponentProps {}

export const HomeWidgetStyled = styled.div<AllProps>`
  visibility: ${(props) =>
    props.show && !props.modal && props.navHidden ? "visible" : "hidden"};

  a {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    position: fixed;
    top: 85%;
    right: 5%;
    z-index: 999;
    transition: opacity 0.3s ease-in-out;
    opacity: ${(props) => (props.show ? 1 : 0)};
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
