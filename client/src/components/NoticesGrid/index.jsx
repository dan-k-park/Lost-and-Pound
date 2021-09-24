import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { MdGridOn, MdBookmarkBorder } from "react-icons/md";
import { BsEye } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: solid;
  border-width: 1.5px;
  border-color: #dbdbdb;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 768px) {
    border-top: none;
    border-bottom: solid;
    border-width: 1.5px;
    border-color: #dbdbdb;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  font-size: 16px;
  font-weight: 600;
  color: #919191;
  cursor: pointer;
`;

const Label = styled.div`
  display: flex;
  align-items: center;

  @media only Screen and (max-width: 768px) {
    display: none;
  }
`;

const GridContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Grid = styled.div`
  background-color: red;
`;

const dummyNotices = [];
const dummyLooking = [];
const dummyFound = [];

const NoticesGrid = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <IconContext.Provider
      value={{
        style: {
          verticalAlign: "middle",
          fontSize: `${useWindowSize().width > 768 ? "20px" : "30px"}`,
          marginRight: "6px",
        },
      }}
    >
      <Container>
        <Tabs>
          <Tab
            style={{
              color: `${toggleState === 1 ? "#000" : "#919191"}`,
              borderTop: `${toggleState === 1 ? "1.5px solid #000" : ""}`,
              marginTop: `${toggleState === 1 ? "-1.5px" : ""}`,
            }}
            onClick={() => toggleTab(1)}
          >
            <MdGridOn />
            <Label>Notices</Label>
          </Tab>
          <Tab
            style={{
              color: `${toggleState === 2 ? "#000" : "#919191"}`,
              borderTop: `${toggleState === 2 ? "1.5px solid #000" : ""}`,
              marginTop: `${toggleState === 2 ? "-1.5px" : ""}`,
            }}
            onClick={() => toggleTab(2)}
          >
            <BsEye />
            <Label>Looking</Label>
          </Tab>
          <Tab
            style={{
              color: `${toggleState === 3 ? "#000" : "#919191"}`,
              borderTop: `${toggleState === 3 ? "1.5px solid #000" : ""}`,
              marginTop: `${toggleState === 3 ? "-1.5px" : ""}`,
            }}
            onClick={() => toggleTab(3)}
          >
            <MdBookmarkBorder />
            <Label>Found</Label>
          </Tab>
        </Tabs>
        <GridContainer>
          <Grid style={{ display: `${toggleState === 1 ? "grid" : "none"}` }}>
            Notices
          </Grid>
          <Grid style={{ display: `${toggleState === 2 ? "grid" : "none"}` }}>
            Looking
          </Grid>
          <Grid style={{ display: `${toggleState === 3 ? "grid" : "none"}` }}>
            Found
          </Grid>
        </GridContainer>
      </Container>
    </IconContext.Provider>
  );
};

export default NoticesGrid;
