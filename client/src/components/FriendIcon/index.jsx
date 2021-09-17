import React from "react";
import styled from "styled-components";

const Friend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const FriendAvatarContainer = styled.div`
  margin-right: 10px;
  position: relative;
`;

const FriendAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const OnlineDot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #22ff00;
  position: absolute;
  top: -2px;
  right: 0;
  border: 2px solid white;
`;

const FriendName = styled.span`
  font-weight: 500;

  @media only Screen and (max-width: 960px) {
    display: none;
  }
`;

const FriendIcon = () => {
  return (
    <Friend>
      <FriendAvatarContainer>
        <FriendAvatar
          src="https://www.anime-planet.com/images/characters/198839.jpg?t=1604603491"
          alt="Friend's profile picture"
        />
        <OnlineDot></OnlineDot>
      </FriendAvatarContainer>
      <FriendName>Naidan Mönkhbat</FriendName>
    </Friend>
  );
};

export default FriendIcon;
