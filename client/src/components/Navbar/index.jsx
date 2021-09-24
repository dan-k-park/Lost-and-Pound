import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MdPersonOutline,
  MdSearch,
  MdNotificationsNone,
  MdChatBubbleOutline,
  MdCancel,
} from "react-icons/md";

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #fff;
  border-bottom: solid;
  border-width: thin;
  border-color: #dbdbdb;
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
  color: #000;
  @media only Screen and (max-width: 640px) {
    display: none;
  }
`;

const Small = styled.h3`
  display: none;
  color: #000;
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
  background-color: #fafafa;
  border-radius: 3px;
  border: solid;
  border-width: thin;
  border-color: #dbdbdb;
  display: flex;
  align-items: center;
  @media only Screen and (max-width: 640px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  border: none;
  width: 70%;
  background-color: #fafafa;

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
    color: #000;
  }
`;

const CancelButton = styled(MdCancel)`
  display: none;
  @media only Screen and (max-width: 640px) {
    display: inline-block;
    margin-left: 5.5vw;
    margin-right: 5px;
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
  @media only Screen and (max-width: 320px) {
    display: none;
  }
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
  align-items: center;
  font-size: 12px;
`;

const UserAvatar = styled.img`
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
            <MdPersonOutline style={{ fontSize: "28px", color: "#000" }} />
            <IconBadge>1</IconBadge>
          </NavIcon>
          <NavIcon>
            <MdChatBubbleOutline style={{ fontSize: "28px", color: "#000" }} />
            <IconBadge>2</IconBadge>
          </NavIcon>
          <NavIcon>
            <MdNotificationsNone style={{ fontSize: "28px", color: "#000" }} />
            <IconBadge>3</IconBadge>
          </NavIcon>
        </NavIconContainer>
        <Link to="/biceros">
          <UserAvatar
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Pseudobiceros_hancockanus.jpg"
            alt="User profile picture"
          />
        </Link>
      </NavLinkContainer>
    </Container>
  );
};

export default Navbar;
