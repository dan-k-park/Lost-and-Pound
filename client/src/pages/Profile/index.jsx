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

  @media only Screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BioContainer = styled.div`
  display: flex;
  height: 280px;
  padding: 10px 40px 10px 40px;

  @media only Screen and (max-width: 768px) {
    padding: 0;
  }
`;

const AvatarWrapper = styled.div`
  flex: 3;
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

  @media only Screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const InfoContainer = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 80px;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  @media only Screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const MiddleLine = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin-bottom: 30px;
`;

const Logistics = styled.li`
  font-size: 20px;

  &:last-child {
    cursor: pointer;
  }
`;

const Username = styled.span`
  font-size: 32px;
  font-weight: 400;
`;

const EditProfileButton = styled.button`
  padding: 9px 8px 9px 8px;
  border-radius: 5px;
  border: 1.5px solid #dbdbdb;
  margin: 0 0 10px 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background-color: #fafafa;
  width: 110px;
`;

const NoticesGrid = styled.div`
  flex: 7;
  background-color: blue;
`;

const BottomLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const FullName = styled.h3`
  margin-bottom: 10px;
`;

const Location = styled.p`
  font-size: 20px;
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
            <MiddleLine>
              <Logistics>
                <b>1</b> notice
              </Logistics>
              <Logistics onClick={() => console.log("Open a modal here")}>
                <b>3</b> friends
              </Logistics>
            </MiddleLine>
            <BottomLine>
              <FullName>Pseudobiceros Gloriosus</FullName>
              <Location>Everett, Washington</Location>
            </BottomLine>
          </InfoContainer>
        </BioContainer>
        <NoticesGrid>hi</NoticesGrid>
      </ProfileContent>
    </Container>
  );
};

export default Profile;
