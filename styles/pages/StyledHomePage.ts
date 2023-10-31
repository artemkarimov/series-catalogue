'use client';

import styled from 'styled-components';

const HomePageWrapper = styled.div`
  background-image: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.colors.primaryLight},
      ${({ theme }) => theme.colors.primaryDark}
    ),
    url('/series-catalogue.jpeg');
  background-size: cover;
  background-position: top;
  height: 100vh;

  .content-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading {
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 3.5rem;

    .heading-part {
      display: block;

      &--first {
        margin-bottom: 2rem;
        animation: moveInLeft 1s ease-out;
      }

      &--second {
        animation: moveInRight 1s ease-out;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 2.7rem;
      letter-spacing: 1.2rem;
    }
  }

  .cta-button {
    font-size: 1.8rem;
    position: relative;
    margin-top: 6rem;
    padding: 1.5rem 4rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray};
    border: none;
    border-radius: 10rem;
    text-transform: uppercase;
    transition: all 0.2s;
    animation: moveInBottom 0.5s ease-out 1s;
    animation-fill-mode: backwards;
    cursor: pointer;

    &:hover {
      box-shadow: 0 1rem 2rem ${({ theme }) => theme.colors.transparentBlack};
      transform: translateY(-0.3rem);

      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }

    &:active {
      transform: translateY(-0.1rem);
      box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.colors.transparentBlack};
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 10rem;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.4s;
      z-index: -1;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 1.3rem;
      margin-top: 4rem;
      padding: 1rem 2.5rem;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export default HomePageWrapper;
