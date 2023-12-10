import { styled } from "styled-components";

export const HomeStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    width: 100%;
  }

  .content {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h1 {
      width: 100%;
      font-size: 3rem;
      color: #fff;
    }
    p {
      margin-top: 15px;
      font-size: 1.4rem;
      color: #fff;
    }

    .btns {
      width: 100%;
      margin-top: 30px;
      padding: 10px;
      display: flex;
      a {
        display: block;
        margin-left: 20px;
        text-decoration: none;
        color: #fff;
        font-size: 1.3rem;
        width: 160px;
        padding: 15px 0;
        border: 2px solid #fff;
        border-radius: 25px;
        transition: all 0.3s ease-in-out;
        text-align: center;

        &:hover {
          transition: all 0.3s ease-in-out;
          background-color: whitesmoke;
          color: black;
          transform: scale(1.1);
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    background-color: #000;

    video {
      height: 90%;
      z-index: 10;
    }

    .content {
      width: 90%;
      align-items: center;
      z-index: 20;

      h1 {
        margin-bottom: 150px;
        font-size: 2rem;
        text-align: center;
      }

      p {
        margin-top: 50px;
        text-align: center;
      }
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    background-color: #000;

    video {
      height: 100%;
      z-index: 10;
    }

    .content {
      z-index: 20;

      h1 {
        margin-bottom: 150px;
        font-size: 2rem;
        text-align: center;
      }

      p {
        margin-top: 50px;
        text-align: center;
      }

      .btns {
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background-color: #000;

    video {
      height: 100%;
      z-index: 10;
    }

    .content {
      z-index: 20;

      h1 {
        margin-bottom: 150px;
        font-size: 2.5rem;
        text-align: center;
      }

      p {
        margin-top: 50px;
        text-align: center;
      }

      .btns {
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media screen and (min-width: 1025px) {
    background-color: #000;

    video {
      height: 100%;
      z-index: 10;
    }

    .content {
      z-index: 20;

      h1 {
        margin-bottom: 150px;
        font-size: 3rem;
        text-align: center;
      }

      p {
        width: 100%;
        margin-top: 50px;
        text-align: center;
      }

      .btns {
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
