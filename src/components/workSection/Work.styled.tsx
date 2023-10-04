import { styled } from "styled-components";

export const WorkStyled = styled.section`
  height: 100%;
  padding-top: 15%;
  background: linear-gradient(to bottom, #480355, #63b4d1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  h2 {
    position: relative;
    margin: 0 0 30px 10%;
    color: #90fcf9;

    &::before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 20px;
      height: 4px;
      background-color: #90fcf9;
      border-radius: 4px;
    }
  }

  .horizontal-rule {
    width: 80%;
    margin: 0 10%;
    height: 3px;
    background-color: #90fcf9;
    position: absolute;
    top: 5%;
    left: 0;
  }

  .work-float {
    position: absolute;
    top: -80px;
    right: 10%;
    color: #480355;
    background-color: #90fcf9;
    width: 50%;
    padding: 40px;
    height: 300px;

    h1 {
      margin: 0 0 20px 20px;
      font-size: 2.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .work-projects {
    margin-top: 10%;
  }

  @media screen and (max-width: 480px) {
    padding-top: 60%;
    .horizontal-rule {
      display: none;
    }

    .work-float {
      right: 0;
      width: 90%;
      height: 350px;
      margin: 0 5%;

      h1 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.1rem;
      }
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    .horizontal-rule {
      display: none;
    }

    .work-float {
      right: 0;
      width: 90%;
      margin: 0 5%;

      h1 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.1rem;
      }
    }

    .work-projects {
      margin-top: 30%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .horizontal-rule {
      display: none;
    }

    .work-float {
      right: 0;
      width: 90%;
      margin: 0 5%;
    }

    .work-projects {
      margin-top: 30%;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
  }
`;
