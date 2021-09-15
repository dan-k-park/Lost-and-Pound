import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MdPerson,
  MdSearch,
  MdNotifications,
  MdChatBubble,
  MdCancel,
} from "react-icons/md";

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #1da1f2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const LogoContainer = styled.div`
  flex: 3;
`;

const Large = styled.h3`
  display: inline-block;
  color: #fff;
  @media only Screen and (max-width: 640px) {
    display: none;
  }
`;

const Small = styled.h3`
  display: none;
  color: #fff;
  @media only Screen and (max-width: 640px) {
    display: inline-block;
  }
`;

const Logo = styled(Link)`
  margin-left: 20px;
`;

const SearchContainer = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  @media only Screen and (max-width: 640px) {
    display: ${(props) => (props.searchOpen ? "flex" : "none")};
  }
`;

const SearchBar = styled.div`
  width: 80%;
  height: 30px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  @media only Screen and (max-width: 640px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  border: none;
  width: 70%;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled(MdSearch)`
  display: none;
  @media only Screen and (max-width: 640px) {
    display: block;
    font-size: 28px;
    margin-right: 12px;
    color: #fff;
  }
`;

const CancelButton = styled(MdCancel)`
  display: none;
  @media only Screen and (max-width: 640px) {
    display: inline-block;
  }
`;

const NavLinkContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 25px;
  color: #fff;
`;

const NavIconContainer = styled.div`
  display: flex;
  margin-right: 25px;

  @media only Screen and (max-width: 640px) {
    display: ${(props) => (props.searchOpen ? "none" : "flex")};
    margin-left: 10%;
    margin-right: 5%;
  }
`;

const NavIcon = styled.div`
  margin-right: 15px;
  cursor: pointer;
  position: relative;
`;

const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  top: -5px;
  right: -3px;
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Container>
      <LogoContainer>
        <Logo as="" to="/" style={{ textDecoration: "none" }}>
          <Large>Lost and Pound</Large>
          <Small>L&P</Small>
        </Logo>
      </LogoContainer>
      <SearchContainer searchOpen={searchOpen}>
        <SearchBar>
          <MdSearch style={{ marginLeft: "12px" }} />
          <SearchInput placeholder="Search Here" />
          <CancelButton onClick={() => setSearchOpen(false)} />
        </SearchBar>
      </SearchContainer>
      <NavLinkContainer>
        <NavIconContainer searchOpen={searchOpen}>
          <SearchButton onClick={() => setSearchOpen(true)} />
          <NavIcon>
            <MdPerson style={{ fontSize: "28px" }} />
            <IconBadge>1</IconBadge>
          </NavIcon>
          <NavIcon>
            <MdChatBubble style={{ fontSize: "28px" }} />
            <IconBadge>2</IconBadge>
          </NavIcon>
          <NavIcon>
            <MdNotifications style={{ fontSize: "28px" }} />
            <IconBadge>3</IconBadge>
          </NavIcon>
        </NavIconContainer>
        <Link to="/">
          <UserImg
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Pseudobiceros_hancockanus.jpg"
            alt="User profile picture"
          />
        </Link>
      </NavLinkContainer>
    </Container>
  );
};

export default Navbar;
