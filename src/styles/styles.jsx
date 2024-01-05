import styled from 'styled-components';


export const Container = styled.div`

  line-height: 1.5;
  font-weight: 500;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h2{
    line-height: 1.5;
  }


  img {
      border-radius: 50% 50% 0 50% !important;
      width: 45px !important;
      height: 45px !important;
    }   
    
`;

export const ChatHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  background-color: #FAB700;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 99999;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  inset: 0;
  width: ${(props) => props.width };
  height: ${(props) => props.height};
`;

export const ProfileImage = styled.img`
  &&{
    width: ${(props) => props.width || '35px'} !important;
    height: ${(props) => props.height || '35px'} !important;
    border-radius: 50% !important;
    margin-right: 10px !important;
  } 
`;


export const OnlineIndicator = styled.div`
  width: ${(props) => props.width || '12px'};
  height: ${(props) => props.height || '12px'};
  background-color: #14a800;
  border-radius: 50%;
  margin-right: 5px;
  position: absolute;
  right: ${(props) => props.right || '-5px'};
  bottom: ${(props) => props.bottom || '0'};
  z-index: 99;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 4px;
`;

export const UserName = styled.div`
  font-weight: bold;
  color:  #eaedf0;
`;

export const OnlineStatus = styled.div`
  color: #eaedf0;
  font-size: 12px;
`;

export const WhattsContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  gap: 1rem;
  font-size: 14px;
  font-weight: 500;
`
export const WhattsLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  font-size: 1rem;
  font-weight: 500;
  color: #f5f8fb;
  gap: 8px;
  background-color: #075E54;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    background-color: #0d7e66;
    color: #ffffff;
  }
`;


export const BubbleMessage = styled.div`
  position: absolute;
  right: 105%;
  bottom: 60%;
  max-width: max-content;
  width: 280px;
  border-radius: 26px 26px 0 26px !important;
  padding: 1rem;
  color: #242424;
  background-color: #dbdbdb;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  z-index: 99999;
  box-shadow: 0 12px 24px 0 rgba(0,0,0,0.15);
  transform: scale(1);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
`;

export const LoaderText = styled.div`
  width: 5px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;

  @keyframes l5 {
    0%   { box-shadow: 10px 0 #000, -10px 0 #0002; background: #000; }
    33%  { box-shadow: 10px 0 #000, -10px 0 #0002; background: #0002; }
    66%  { box-shadow: 10px 0 #0002, -10px 0 #000; background: #0002; }
    100% { box-shadow: 10px 0 #0002, -10px 0 #000; background: #000; }
  }
`;


export const CustomStepButton = styled.button`
  width: 100%;
  height: 4rem;
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  font-size: 14px;
  font-weight: 600;
  color: #242424;
  gap: 8px;
  background-color: #fab700;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;

  &:hover {
    background-color: #ffbf10;
  }
`;