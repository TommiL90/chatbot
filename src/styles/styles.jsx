import styled from 'styled-components';


export const Container = styled.div`

  line-height: 1.25;
  font-weight: 500;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  button{
      cursor: pointer;
      border: none;
      background: transparent;
      transition: border-color 0.25s;
      border-radius: 4px;
      };

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
  width: ${(props) => props.width};
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
  right: ${(props) => props.right || '4px'};
  bottom: ${(props) => props.bottom || '6px'};
  z-index: 99;
`;

export const UserName = styled.div`
  font-weight: bold;
`;

export const OnlineStatus = styled.div`
  color: #14a800;
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
