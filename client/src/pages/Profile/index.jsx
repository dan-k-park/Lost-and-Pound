import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProfileContent = styled.div`
  width: 80%;
  background-color: blue;
  display: flex;
  flex-direction: column;
`;

const BioContainer = styled.div`
  background-color: red;
  display: flex;
`;

const AvatarWrapper = styled.div`
  flex: 3;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const Profile = () => {
  return (
    <Container>
      <ProfileContent>
        <BioContainer>
          <AvatarWrapper>
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Pseudobiceros_hancockanus.jpg" />
          </AvatarWrapper>
        </BioContainer>
      </ProfileContent>
    </Container>
  );
};

export default Profile;
