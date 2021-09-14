import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MdPerson,
  MdSearch,
  MdNotifications,
  MdChatBubble,
} from "react-icons/md";

const Container = styled.div`
  height: 50px;
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

const Logo = styled.span`
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  flex: 5;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  width: 70%;

  &:focus {
    outline: none;
  }
`;

const NavLinkContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;'
  justify-content: space-around;
  color: #fff;
`;

const NavIconContainer = styled.div`
  display: flex;
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
  right: -5px;
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const NavLink = styled.span`
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>Lost and Pound</Logo>
        </Link>
      </LogoContainer>
      <SearchContainer>
        <SearchBar>
          <MdSearch />
          <SearchInput placeholder="Search Here" />
        </SearchBar>
      </SearchContainer>
      <NavLinkContainer>
        <div>
          <NavLink>Homepage</NavLink>
          <NavLink>Feed</NavLink>
        </div>
        <NavIconContainer>
          <NavIcon>
            <MdPerson />
            <IconBadge>1</IconBadge>
          </NavIcon>
          <NavIcon>
            <MdChatBubble />
            <IconBadge>2</IconBadge>
          </NavIcon>
          <NavIcon>
            <MdNotifications />
            <IconBadge>3</IconBadge>
          </NavIcon>
        </NavIconContainer>
        <Link>
          {/* <UserImg
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Pseudobiceros_hancockanus.jpg"
            alt="User profile picture"
          /> */}
        </Link>
      </NavLinkContainer>
    </Container>
  );
};

export default Navbar;
