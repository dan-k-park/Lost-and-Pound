import React from "react";
import styled from "styled-components";
import Cat from "./FilterIcons/Cat.jsx";
import Dog from "./FilterIcons/Dog.jsx";
import Hamster from "./FilterIcons/Hamster.jsx";
import Jellyfish from "./FilterIcons/Jellyfish.jsx";
import Rabbit from "./FilterIcons/Rabbit.jsx";
import Tortoise from "./FilterIcons/Tortoise.jsx";

const Container = styled.div`
  flex: 2.5;
  position: sticky;
  // Accounting for height of navbar
  height: calc(100vh - 60px);
  top: 60px;
  background-color: red;
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
  margin-left: 24px;
`;

const FilterDivider = styled.hr`
  margin: 20px 0;
`;

const SearchingForList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
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
        <SearchingForList>
          <div>Doug</div>
        </SearchingForList>
      </Wrapper>
    </Container>
  );
};

export default Filters;
