import React from "react";
import styled from "styled-components";
import NoticesGrid from "../../components/NoticesGrid";

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
    height: 220px;
  }
`;

const AvatarWrapper = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;

  @media only Screen and (max-width: 768px) {
    padding-top: 20px;
    margin-left: 10px;
    flex: 2;
    justify-content: flex-start;
  }
`;

const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;

  @media only Screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const InfoContainer = styled.div`
  flex: 10;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 80px;

  @media only Screen and (max-width: 768px) {
    padding: 20px 0 0 20px;
    position: relative;
  }
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

  @media only Screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileLogistics = styled.ul`
  display: none;

  @media Screen and (max-width: 768px) {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-style: solid none solid none;
    border-width: thin;
    border-color: #dbdbdb;
    height: 70px;
  }
`;

const Logistics = styled.li`
  font-size: 20px;

  &:last-child {
    cursor: pointer;
  }

  @media only Screen and (max-width: 768px) {
    text-align: center;
    font-size: 18px;
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
  background-color: #fafafa;
  margin: 0 0 10px 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 110px;

  @media only Screen and (max-width: 768px) {
    margin: 10px 0 0 0;
    width: 90%;
  }
`;

const GridContainer = styled.div``;

const BottomLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media only Screen and (max-width: 768px) {
    position: absolute;
    top: 150px;
    left: calc(-90vw + 90%);
  }
`;

const FullName = styled.h3`
  margin-bottom: 10px;

  // @media only Screen and (max-width: 768px) {
  //   position: absolute;
  //   top: 40px;
  //   left: -140px;
  // }
`;

const Location = styled.p`
  font-size: 20px;

  // @media only Screen and (max-width: 768px) {
  //   position: absolute;
  //   top: 70px;
  //   left: -140px;
  // }
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
        <MobileLogistics>
          <Logistics>
            <b>1</b>
            <span
              style={{ display: "block", marginTop: "4px", color: "#8e8e8e" }}
            >
              notice
            </span>
          </Logistics>
          <Logistics onClick={() => console.log("Open a modal here")}>
            <b>3</b>
            <span
              style={{ display: "block", marginTop: "4px", color: "#8e8e8e" }}
            >
              friends
            </span>
          </Logistics>
        </MobileLogistics>
        <GridContainer>
          <NoticesGrid />
        </GridContainer>
      </ProfileContent>
    </Container>
  );
};

export default Profile;
