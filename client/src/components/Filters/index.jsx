import React from "react";
import styled from "styled-components";
import Cat from "./FilterIcons/Cat.jsx";
import Dog from "./FilterIcons/Dog.jsx";
import Hamster from "./FilterIcons/Hamster.jsx";
import Jellyfish from "./FilterIcons/Jellyfish.jsx";
import Rabbit from "./FilterIcons/Rabbit.jsx";
import Tortoise from "./FilterIcons/Tortoise.jsx";
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
  font-size: 18px;
  width: 90px;
  height: 30px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const MapContainer = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 15vw;
`;

const Filters = () => {
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
            <MdMap style={{ fontSize: "24px" }} />
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
