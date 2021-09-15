import React from "react";
import styled from "styled-components";
import Filters from "../../components/Filters";
import Feed from "../../components/Feed";
import Friends from "../../components/Friends";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <Filters />
      <Feed />
      <Friends />
    </Container>
  );
};

export default Home;
