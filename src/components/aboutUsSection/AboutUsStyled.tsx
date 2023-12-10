import { styled } from "styled-components";

export const AboutUsStyled = styled.section`
  height: 100%;
  padding-bottom: 5%;
  background: #480355;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-top: 20%;

  .float {
    position: absolute;
    top: -80px;
    left: 10%;
    background-color: #90fcf9;
    width: 60%;
    padding: 40px;
    height: 300px;
    z-index: 10;

    h1 {
      margin: 0 0 20px 20px;
      font-size: 2.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .team {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15%;
    position: relative;

    .team-decoration-border {
      position: absolute;
      top: -5%;
      right: 13%;
      width: 40%;
      height: 300px;
      border-top: 2px solid #90fcf9;
      border-right: 2px solid #90fcf9;
    }

    img {
      width: 500px;
      border-radius: 15px;
    }

    .wrapper-tags {
      p {
        margin: 0 5%;
        color: #90fcf9;
      }

      .tags {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 15% 0 15%;
        height: 180px;
        flex-wrap: wrap;

        .tag {
          width: 180px;
          background: linear-gradient(to right, #7699d4, #63b4d1);
          border: none;
          padding: 10px;
          margin-right: 10px;
          border-radius: 30px;
          color: #90fcf9;
          font-weight: bolder;
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
  .team-members {
    width: 80%;
    margin: 5% 0;

    h2 {
      margin-bottom: 15px;
      display: block;
      position: relative;
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
    .members {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      figure {
        margin: 50px 30px 50px 0;
        /* width: 300px; */
        flex-basis: 300px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 30px;
        position: relative;
        //pointer-events: none;

        /* &:not(:last-child) {
          margin-right: 30px;
        } */

        img {
          border-radius: 30px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 100;
        }

        .fire {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
          z-index: 900;

          &:has(~ a .figure-scroll:hover) {
            opacity: 0.8;
            transition: opacity 0.4s ease-in-out;
          }
        }
        a {
          .figure-scroll {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: column;
            position: absolute;
            top: 75%;
            left: 0;
            transition: all 0.3s ease-in-out;
            width: 100%;
            height: 35%;
            color: #90fcf9;
            background-color: #63b4d1;
            border-radius: 0 0 30px 30px;
            margin-top: 10px;
            cursor: pointer;
            //pointer-events: auto;

            & figcaption span i {
              visibility: hidden;
            }

            & span i {
              transition: all 0.3s ease-in-out;
            }

            &:hover {
              transition: all 0.3s ease-in-out;
              top: 85%;

              & > span i {
                transition: all 0.3s ease-in-out;
                transform: rotateZ(180deg);
              }
            }

            figcaption {
              font-size: 1.2rem;
              margin-top: 5px;
              &:nth-of-type(1) {
                font-weight: bold;
              }
            }

            & > span {
              position: absolute;
              bottom: 10px;
              right: 10px;
            }
          }
        }

        &:last-of-type {
          overflow: hidden;
          &:hover {
            .fire {
              opacity: 0.8;

              & ~ a .figure-scroll {
                top: 0;
              }
            }
          }

          & a {
            & .figure-scroll {
              margin-top: 0;
              z-index: 900;
              top: -100%;
              left: 0;
              font-size: 1.4rem;
              justify-content: center;
              border-radius: 30px 30px 0 0;
              background: linear-gradient(to bottom, #63b4d1 60%, transparent);
              & figcaption:nth-of-type(1) {
                display: none;
              }
              & figcaption:nth-of-type(2) {
                margin-bottom: 40px;
                display: flex;
                justify-content: space-around;
              }
              & figcaption span i {
                visibility: visible;
                animation: addUserChevron 0.5s ease-in-out infinite;
              }

              & > span {
                display: none;
              }
            }
          }
        }

        /* &:last-of-type {
          overflow: hidden;
          .fire.burn {
            z-index: 999;
            &:hover {
              opacity: 0.8;
              & ~ a .figure-scroll {
                top: 0;
              }
            }
          }

          a {
            .figure-scroll {
              z-index: 999;
              top: -100%;
              left: 0;
              font-size: 1.4rem;
              justify-content: center;
              background: linear-gradient(to bottom, #63b4d1 60%, transparent);
              figcaption:nth-of-type(1) {
                display: none;
              }
              span {
                display: none;
              }
            }
          }
        } */
      }

      /* a.add-user {
        margin: 50px 30px 50px 0;
        width: 300px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        border-radius: 30px;
        position: relative;
        //pointer-events: none;

        img {
          border-radius: 30px;
          width: 100%;
          height: 100%;
          z-index: 100;
          object-fit: cover;
        }

        .figure {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 50px;
          width: 100%;
          z-index: 100;
        }
      } */
    }
  }

  @media screen and (max-width: 480px) {
    .float {
      height: 450px;
      width: 90%;
      left: 0;
      margin: 0 5%;
    }

    .team {
      margin-top: 100%;
      flex-direction: column;
      padding: 0 5%;

      .team-decoration-border {
        right: 7%;
      }

      img {
        width: 80%;
      }

      .wrapper-tags {
        margin-top: 30px;
        p {
          text-align: justify;
        }
        .tags {
          margin-top: 20px;

          .tag {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      }
    }

    .team-members {
      margin-top: 40%;
      width: 100%;

      h2 {
        margin-left: 5%;
      }
      .members {
        justify-content: center;

        figure {
          width: 70%;
          height: 400px;
          overflow: hidden;

          /* &:not(:last-child) {
            margin-right: 0;
          } */

          .fire.burn {
            opacity: 1;

            & ~ a .figure-scroll {
              top: 90%;
            }
          }
          a {
            .figure-scroll {
              top: 65%;
              background: linear-gradient(to top, #63b4d1 60%, transparent);
              z-index: 999;

              & figcaption {
                margin-top: 0;
              }

              & > span {
                display: none;
              }
            }
          }

          &:last-of-type {
            .fire.burn {
              opacity: 0.8;

              & ~ a .figure-scroll {
                top: 0;
              }
            }
            & a {
              & .figure-scroll {
                top: -100%;
                left: 0;
                font-size: 1.4rem;
                justify-content: center;
                background: linear-gradient(
                  to bottom,
                  #63b4d1 60%,
                  transparent
                );
              }
            }
          }
        }
        /* a.add-user {
          margin: 50px 0;

          .figure {
            & figcaption {
              padding-bottom: 10px;
              z-index: 999;
            }
          }
        } */
      }
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding-top: 45%;

    .float {
      height: 350px;
      width: 90%;
      left: 0;
      margin: 0 5%;
    }

    .team {
      margin-top: 100px;
      flex-direction: column;
      padding: 0 5%;

      .team-decoration-border {
        right: 7%;
      }

      img {
        width: 80%;
      }

      .wrapper-tags {
        margin-top: 30px;
        p {
          text-align: justify;
        }
        .tags {
          margin: 0;

          .tag {
          }
        }
      }
    }

    //thissssssssssss
    .team-members {
      width: 100%;

      h2 {
        margin-left: 5%;
      }
      .members {
        justify-content: center;
        gap: 20px;

        figure {
          /* width: 40%; */
          flex-basis: 250px;
          height: 400px;
          overflow: hidden;

          /* &:not(:last-child) {
            margin-right: 0;
          } */

          .fire.burn {
            opacity: 1;

            & ~ a .figure-scroll {
              top: 90%;
            }
          }
          a {
            .figure-scroll {
              top: 65%;
              background: linear-gradient(to top, #63b4d1 60%, transparent);
              z-index: 999;

              & figcaption {
                margin-top: 0;
              }

              & > span {
                display: none;
              }
            }
          }

          &:last-of-type {
            .fire.burn {
              opacity: 1;

              & ~ a .figure-scroll {
                top: 0;
              }
            }
            & a {
              & .figure-scroll {
                top: -100%;
                left: 0;
                font-size: 1.4rem;
                justify-content: center;
                background: linear-gradient(
                  to bottom,
                  #63b4d1 60%,
                  transparent
                );
                figcaption:nth-of-type(1) {
                  display: none;
                }

                &:hover {
                  top: 0;
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding-top: 45%;

    .float {
      height: 350px;
      width: 90%;
      margin: 0 5%;
      left: 0;
    }

    .team {
      flex-direction: column;
      padding: 0 5%;

      .team-decoration-border {
        right: 7%;
      }

      img {
        width: 80%;
      }

      .wrapper-tags {
        p {
          margin-top: 20px;
        }
        .tags {
          text-align: justify;
          margin-top: 30px;
        }
      }
    }

    .team-members {
      .members {
        justify-content: center;

        figure {
          /* width: 40%; */
          flex-basis: 250px;
          height: 400px;
          overflow: hidden;

          .fire.burn {
            opacity: 1;

            & ~ a .figure-scroll {
              top: 90%;
            }
          }

          a {
            .figure-scroll {
              top: 65%;
              background: linear-gradient(to top, #63b4d1 60%, transparent);
              z-index: 999;
              border-radius: 0 0 30px 30px;

              & figcaption {
                margin-top: 0;
              }

              & > span {
                display: none;
              }
            }
          }

          &:last-of-type {
            .fire.burn {
              opacity: 1;

              & ~ a .figure-scroll {
                top: 0;
              }
            }
            a {
              .figure-scroll {
                top: -100%;
                left: 0;
                font-size: 1.4rem;
                justify-content: center;
                background: linear-gradient(
                  to bottom,
                  #63b4d1 60%,
                  transparent
                );
                figcaption:nth-of-type(1) {
                  display: none;
                }

                &:hover {
                  top: 0;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    padding-top: 45%;

    .float {
      height: 350px;
      width: 90%;
      margin: 0 5%;
      left: 0;
    }

    .team {
      flex-direction: column;
      padding: 0 5%;

      .team-decoration-border {
        right: 7%;
      }

      img {
        width: 80%;
      }

      .wrapper-tags {
        p {
          margin-top: 20px;
        }
        .tags {
          text-align: justify;
          margin-top: 30px;
        }
      }
    }

    .team-members {
      .members {
        justify-content: center;

        /*figure {
           width: 200px;
          height: 300px;
          overflow: hidden;

          .fire.burn {
            opacity: 1;

            & ~ a .figure-scroll {
              top: 90%;
            }
          }

          a {
            pointer-events: none;
          }

          .figure-scroll {
            top: 65%;
            background: linear-gradient(to top, #63b4d1 60%, transparent);
            z-index: 999;
            border-radius: 0 0 30px 30px;

            & span {
              display: none;
            }
          }

          .figure {
            border-radius: 0 0 30px 30px;

            & figcaption {
              padding-bottom: 10px;
              z-index: 999;
            }
          } 
        }*/
      }
    }
  }

  @keyframes addUserChevron {
    0% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(5px);
    }
  }
`;
