import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { MdGridOn, MdBookmarkBorder, MdPersonPin } from "react-icons/md";
import { BsEye } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-top: solid;
  border-width: 1.5px;
  border-color: #dbdbdb;
  justify-content: center;

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

const NoticesGrid = () => {
  const [toggleTab, setToggleTab] = useState(1);

  return (
    <IconContext.Provider
      value={{
        style: {
          verticalAlign: "middle",
          color: "#919191",
          fontSize: `${useWindowSize().width > 768 ? "20px" : "30px"}`,
          marginRight: "6px",
        },
      }}
    >
      <Container>
        <Tabs>
          <Tab>
            <MdGridOn />
            <Label>Notices</Label>
          </Tab>
          <Tab>
            <BsEye />
            <Label>Looking</Label>
          </Tab>
          <Tab>
            <MdBookmarkBorder />
            <Label>Found</Label>
          </Tab>
        </Tabs>
      </Container>
    </IconContext.Provider>
  );
};

export default NoticesGrid;
