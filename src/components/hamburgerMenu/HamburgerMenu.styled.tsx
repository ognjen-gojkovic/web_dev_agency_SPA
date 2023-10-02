import styled from "styled-components";

export const HamburgerMenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.6);

  ul {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li {
      margin-bottom: 20px;
      list-style: none;
      border-bottom: 2px solid #90fcf9;

      a {
        text-decoration: none;
        font-size: 1.6rem;
        color: #90fcf9;
      }
    }
  }
`;
