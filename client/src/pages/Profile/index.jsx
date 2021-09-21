import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProfileContent = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const BioContainer = styled.div`
  background-color: red;
  display: flex;
  height: 280px;
  padding: 10px 40px 10px 40px;
`;

const AvatarWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;
`;

const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 5;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BottomLine = styled.ul`
  list-style: none;
  display: inline-block;
`;

const Logistics = styled.li`
  display: flex;
  justify-content: flex-start;
`;

const Username = styled.h3``;

const EditProfileButton = styled.button`
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

const NoticesGrid = styled.div`
  flex: 7;
  background-color: blue;
`;

const Profile = () => {
  return (
    <Container>
      <ProfileContent>
        <BioContainer>
          <AvatarWrapper>
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Pseudobiceros_hancockanus.jpg" />
          </AvatarWrapper>
          <InfoContainer>
            <TopLine>
              <Username>Biceros</Username>
              <EditProfileButton>Edit Profile</EditProfileButton>
            </TopLine>
            <BottomLine>
              <Logistics>1 notice</Logistics>
              <Logistics>3 friends</Logistics>
            </BottomLine>
          </InfoContainer>
        </BioContainer>
        <NoticesGrid>hi</NoticesGrid>
      </ProfileContent>
    </Container>
  );
};

export default Profile;
