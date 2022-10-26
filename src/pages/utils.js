import { keyframes } from "@emotion/react";

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;
export const fadeInRight = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;