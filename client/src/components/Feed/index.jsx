import React from "react";
import styled from "styled-components";
import Notice from "../Notice";
import CreateNotice from "../CreateNotice";

const Container = styled.div`
  flex: 5.5;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Feed = () => {
  return (
    <Container>
      <Wrapper>
        <CreateNotice />
        <Notice />
        <Notice />
        <Notice />
      </Wrapper>
    </Container>
  );
};

export default Feed;
