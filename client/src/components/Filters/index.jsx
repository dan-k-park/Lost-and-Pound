import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 3;
  position: sticky;
  // Accounting for height of navbar
  height: calc(100vh - 60px);
  top: 60px;
  background-color: red;
`;

const Filters = () => {
  return <Container>Filters</Container>;
};

export default Filters;
