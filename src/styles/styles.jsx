import styled from 'styled-components';

export const ChatHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  background-color: #FAB700;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  inset: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

`;

 export const ProfileImage = styled.img`
  width: ${(props) => props.width || '35px'};
  height: ${(props) => props.height || '35px'};
  border-radius: 50%;
  margin-right: 10px;
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

