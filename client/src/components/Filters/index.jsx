import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Dog } from "./icons/dog.svg";
import { ReactComponent as Cat } from "./icons/cat.svg";
import { ReactComponent as Hamster } from "./icons/hamster.svg";
import { ReactComponent as Tortoise } from "./icons/tortoise.svg";
import { ReactComponent as Jellyfish } from "./icons/jellyfish.svg";
import { ReactComponent as Rabbit } from "./icons/rabbit.svg";
import { MdMap, MdLocationCity, MdLocationOn } from "react-icons/md";
import Map from "../Map/index.jsx";

const Container = styled.div`
  flex: 2.5;
  position: sticky;
  // Accounting for height of navbar
  height: calc(100vh - 60px);
  top: 0;
  padding: 20px 0 0 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 169);
  }

  @media only Screen and (max-width: 960px) {
    flex: 1.3;
  }

  @media only Screen and (max-width: 640px) {
    flex: 0.75;
  }
`;

const FiltersList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Filter = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin-bottom: 24px;

  @media only Screen and (min-width: 960px) {
    display: ${(props) => (props.location ? "none" : "flex")};
  }
`;

const FilterIcon = styled.div`
  width: 24px;
  height: 24px;
`;

const FilterName = styled.span`
  margin-left: 18px;

  @media only Screen and (max-width: 640px) {
    display: none;
  }
`;

const LocationWrapper = styled.div`
  padding: 0;
  margin: 36px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only Screen and (max-width: 960px) {
    display: none;
  }
`;

const CityStateBar = styled.div`
  width: 80%;
  height: 30px;
  background-color: #fff;
  border: solid;
  border-width: thin;
  border-color: #dbdbdb;
  border-radius: 3px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const CityStateInput = styled.input`
  border: none;
  width: 70%;
  background-color: #fafafa;

  &:focus {
    outline: none;
  }
`;

const ApplyButton = styled.button`
  border: none;
  padding: 7px;
  border-radius: 5px;
  background-color: limegreen;
  font-weight: 500;
  margin: 10px 0 10px 0;
  cursor: pointer;
  color: white;
  width: 80px;
`;

const MapContainer = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 15vw;
`;

const Filters = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <FiltersList>
        <Filter>
          <FilterIcon>
            <Dog />
          </FilterIcon>
          <FilterName>Dog</FilterName>
        </Filter>
        <Filter>
          <FilterIcon>
            <Cat />
          </FilterIcon>
          <FilterName>Cat</FilterName>
        </Filter>
        <Filter>
          <FilterIcon>
            <Rabbit />
          </FilterIcon>
          <FilterName>Rabbit</FilterName>
        </Filter>
        <Filter>
          <FilterIcon>
            <Hamster />
          </FilterIcon>
          <FilterName>Hamster</FilterName>
        </Filter>
        <Filter>
          <FilterIcon>
            <Tortoise />
          </FilterIcon>
          <FilterName>Tortoise</FilterName>
        </Filter>
        <Filter>
          <FilterIcon>
            <Jellyfish />
          </FilterIcon>
          <FilterName>Other</FilterName>
        </Filter>
        <Filter location>
          <FilterIcon>
            <MdMap style={{ fontSize: "24px" }} onClick={openModal} />
          </FilterIcon>
          <FilterName>Location</FilterName>
        </Filter>
      </FiltersList>
      <LocationWrapper>
        <CityStateBar>
          <MdLocationCity style={{ marginLeft: "12px" }} />
          <CityStateInput placeholder="City" />
        </CityStateBar>
        <span style={{ marginBottom: "12px" }}>or</span>
        <CityStateBar>
          <MdLocationOn style={{ marginLeft: "12px" }} />
          <CityStateInput placeholder="County" />
        </CityStateBar>
        <span style={{ marginBottom: "12px" }}>and</span>
        <CityStateBar>
          <MdMap style={{ marginLeft: "12px" }} />
          <CityStateInput placeholder="State" />
        </CityStateBar>
        <ApplyButton>Apply</ApplyButton>
        <MapContainer>
          <Map />
        </MapContainer>
      </LocationWrapper>
    </Container>
  );
};

export default Filters;
