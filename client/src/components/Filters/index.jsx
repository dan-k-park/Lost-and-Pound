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
  top: 60px;
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
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
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
  margin-bottom: 20px;
  cursor: pointer;
`;

const FilterIcon = styled.div`
  width: 24px;
  height: 24px;
`;

const FilterName = styled.span`
  margin-left: 18px;
`;

const FilterDivider = styled.hr`
  margin: 20px 0;
`;

const LocationWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const CityStateBar = styled.div`
  width: 80%;
  height: 30px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  border: solid;
  border-width: thin;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const CityStateInput = styled.input`
  border: none;
  width: 70%;

  &:focus {
    outline: none;
  }
`;

const ApplyButton = styled.button`
  font-size: 18px;
  width: 90px;
  height: 30px;
  z-index: 99;
`;

const MapContainer = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 15vw;
`;

const Filters = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Filter by Animal</Title>
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
        </FiltersList>
        <FilterDivider />
        <Title>Location</Title>
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
      </Wrapper>
    </Container>
  );
};

export default Filters;
