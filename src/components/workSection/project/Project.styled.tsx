import styled from "styled-components";
import { Props } from "./Project";

export const ProjectStyled = styled.div<Props>`
  width: 80%;
  height: 100%;
  margin: 15px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(45deg, #66dfe7, #4afd83);
  padding: 3% 5% 2% 5%;

  & > h3 {
    margin: 0 0 10px 20px;
    color: #9448bc;
    align-self: flex-start;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    flex-flow: ${(props) => (props.idx ? "row-reverse" : "")};

    .tech {
      flex: 2;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      span {
        border-radius: 30px;
        padding: 5px;
        width: 50%;

        img {
          width: 50px;
        }
        h4 {
          color: #9448bc;
          text-align: left;
        }
      }
    }

    .desc {
      flex: 1;
      padding: 20px;

      p {
        color: #9448bc;
        font-size: 1.2rem;
      }

      a {
        display: block;
        text-decoration: none;
        color: #9448bc;
        margin: 15px 0 0 30px;
        border: 2px solid #9448bc;
        border-radius: 30px;
        width: 180px;
        text-align: center;
        padding: 10px;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scale(1.05);
          transition: all 0.3s ease-in-out;
          background: #90fcf9;
          border-color: #90fcf9;
        }
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 100%;

    .wrapper {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .wrapper {
      flex-direction: column;

      .desc {
        a {
          margin: 15px 0 0 0;
        }
      }
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
  }
`;
