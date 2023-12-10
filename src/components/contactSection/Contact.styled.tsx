import styled from "styled-components";

export const ContactStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #63b4d1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 90;

  .contact-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 150;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #63b4d1;

    &.contact-slide {
      transition: opacity 0.6s ease-out, left 0ms ease 0.6s;
      left: -100%;
      opacity: 0;
    }

    button {
      color: #90fcf9;
      font-size: 1.3rem;
      width: 160px;
      padding: 15px 0;
      border: 2px solid #90fcf9;
      border-radius: 25px;
      transition: all 0.3s ease-in-out;
      text-align: center;
      background-color: transparent;

      &:hover {
        transition: all 0.3s ease-in-out;
        background-color: whitesmoke;
        color: #9448bc;
        transform: translateY(-3px);
        box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.2);
      }

      &:active {
        animation: btnAnim 0.3s ease-in-out;
      }
    }
  }

  .wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .wrapper-display {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 120;

      .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
        transition: all 0.3s ease-in-out;
        z-index: 200;
      }

      .data-display {
        width: 80%;
        height: 90vh;
        display: flex;
        justify-items: center;
        align-items: center;
        z-index: 210;
        background-color: #fff;

        .info {
          height: 100%;
          width: 30%;
          padding: 50px 0 0 20px;

          h2 {
            margin: 20px 0;
          }
        }
        .imgs {
          height: 90%;
          width: 70%;
          overflow: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
          .cv-pdf,
          .letter-pdf {
            margin-bottom: 10px;
          }

          .cv-pdf {
          }

          .pdf {
          }
          .img {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            img {
              width: 90%;
              margin: 0 auto;
            }
          }
        }
      }
    }

    // form
    .form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .tooltip {
        background: rgb(231, 78, 61);
        border: 3px solid #eee;
        padding: 30px 90px;
        color: #eee;
        position: absolute;
        top: -200px;
        opacity: 0;
        transition: all 0.5s ease-in-out;
        z-index: 9999;

        &.error {
          top: 100px;
          opacity: 1;
        }

        & > p {
          font-size: 1.5rem;
          font-weight: bold;
        }

        ul {
          p {
            margin: 10px 0;
          }
          list-style: none;
          line-height: 20px;
        }
      }

      h2 {
        margin-bottom: 5%;
        font-size: 2rem;
        color: #90fcf9;
      }

      form {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        .control {
          position: relative;
          width: 100%;

          &:not(:last-child) {
            margin-bottom: 50px;
          }

          label {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 1.4rem;
            transition: all 0.3s ease-in-out;
            color: #90fcf9;

            &[for="CV"],
            &[for="letter"] {
              display: flex;
              justify-content: center;
              align-items: center;
              //color: #9448bc;
              border: 2px solid #90fcf9;
              border-radius: 4px;
              width: 300px;
              height: 40px;
              transition: all 0.3s ease-in-out;
              font-size: 1.2rem;

              &:hover {
                //transform: scale(1.05);
                transform: translateY(-5px);
                box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease-in-out;
                background: #90fcf9;
                border-color: #90fcf9;
                color: #9448bc;
              }
            }
          }

          input {
            height: 36px;
            width: 100%;
            position: relative;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid #90fcf9;
            outline: none;
            left: 10px;
            font-size: 1.4rem;
            color: #90fcf9;

            &:-webkit-autofill {
              transition: background-color 5000s ease-in-out 0s;
              -webkit-text-fill-color: #90fcf9;
            }

            &:focus ~ label,
            &:not(input[value=""]) + label {
              transition: all 0.3s ease-in-out;
              font-size: 1rem;
              top: -18px;
              left: -2px;
            }

            &[type="file"] {
              visibility: hidden;
            }

            &[type="file"].error {
              visibility: visible;

              & ~ label {
                font-size: 7rem;
              }
            }

            &.error {
              border-bottom: 2px solid tomato;
              animation: inputErr 0.5s ease-in-out;

              & ~ label {
                color: tomato;
              }
            }
          }
        }

        .btn {
          align-self: flex-end;
          button {
            color: #90fcf9;
            font-size: 1.3rem;
            width: 160px;
            padding: 15px 0;
            border: 2px solid #90fcf9;
            border-radius: 25px;
            transition: all 0.3s ease-in-out;
            text-align: center;
            background-color: transparent;

            &:hover {
              transition: all 0.3s ease-in-out;
              background-color: whitesmoke;
              color: #9448bc;
              transform: translateY(-3px);
              box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.2);
            }

            &:active {
              animation: btnAnim 0.3s ease-in-out forwards;
            }
          }
        }
      }
    }
  }

  @keyframes btnAnim {
    0% {
      transform: scale(0.97);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes inputErr {
    0% {
      transform: translateX(7px);
    }
    25% {
      transform: translateX(-7px);
    }
    50% {
      transform: translateX(7px);
    }
    75% {
      transform: translateX(-7px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 480px) {
    .wrapper {
      .wrapper-display {
        .data-display {
          flex-direction: column;

          .info {
            width: 80%;
            height: 30%;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
          }
        }
      }
      .form {
        form {
          .control {
            display: flex;

            input {
              left: 0;
            }

            label {
              &[for="CV"],
              &[for="letter"] {
                left: 0;
                width: 100%;
              }
            }
          }
          .btn {
            align-self: center;
          }
        }
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .wrapper {
      .wrapper-display {
        .data-display {
          flex-direction: column;

          .info {
            width: 80%;
            height: 30%;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
          }
        }
      }
    }
    .form {
      form {
        align-items: center;
      }
    }
  }
`;
