import React from "react";
import styled from "styled-components";
import FriendIcon from "../FriendIcon";

const Container = styled.div`
  flex: 3;
  height: calc(90vh - 60px);
  top: 0;
  position: sticky;
  padding-left: 20px;
  overflow-y: scroll;

  @media only Screen and (max-width: 960px) {
    flex: 1;
    padding: 0;
  }

  @media only Screen and (max-width: 640px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 20px 20px 0 0;
`;

const OnlineFriends = styled.span`
  font-weight: 500;
  margin-bottom: 10px;
  display: block;

  @media only Screen and (max-width: 960px) {
    display: none;
  }
`;

const OnlineFriendsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  @media only Screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Friends = () => {
  return (
    <Container>
      <Wrapper>
        <OnlineFriends>Online Friends</OnlineFriends>
        <OnlineFriendsList>
          {/* Wrap this in a react router link that links to a chat with the specified friend */}
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
          <FriendIcon />
        </OnlineFriendsList>
      </Wrapper>
    </Container>
  );
};

export default Friends;
