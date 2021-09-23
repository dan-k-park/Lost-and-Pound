import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-top: solid;
  border-width: 1.5px;
  border-color: #dbdbdb;
  justify-content: center;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px:
`;

const Tab = styled.div`
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
`;

const NoticesGrid = () => {
  const [toggleTab, setToggleTab] = useState(1);

  return (
    <Container>
      <Tabs>
        <Tab>Notices</Tab>
        <Tab>Searching</Tab>
      </Tabs>
    </Container>
  );
};

export default NoticesGrid;
