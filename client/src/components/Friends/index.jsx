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
`;

const Wrapper = styled.div`
  padding: 20px 20px 0 0;
`;

const OnlineFriends = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const OnlineFriendsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Friends = () => {
  return (
    <Container>
      <Wrapper>
        <OnlineFriends>Online Friends</OnlineFriends>
        <OnlineFriendsList>
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
