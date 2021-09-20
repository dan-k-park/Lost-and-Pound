import React from "react";
import styled from "styled-components";
import { MdMap, MdLocationCity, MdLocationOn } from "react-icons/md";

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

const LocationInputs = () => {
  return (
    <>
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
    </>
  );
};

export default LocationInputs;
