import React from "react";
import styled from "styled-components";
import Notice from "../Notice";

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
        <Notice />
        <Notice />
        <Notice />
      </Wrapper>
    </Container>
  );
};

export default Feed;
