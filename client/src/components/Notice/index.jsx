import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdGroup } from "react-icons";

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const OwnerAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const OwnerAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const OwnerName = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin: 0 10px;
`;

const NoticeDate = styled.span`
  font-size: 12px;
`;

const Content = styled.div`
  margin: 20px 0;
`;

const Description = styled.span``;

const PetPicture = styled.img`
  margin-top: 20px;
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
`;

const SearchersWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchersIcon = styled(MdGroup)`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
`;

const SearchersCounter = styled.span`
  font-size: 15px;
`;

const Notice = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <OwnerAvatarContainer>
            <Link to="/">
              <OwnerAvatar
                src="https://i.pinimg.com/236x/ab/e3/e7/abe3e7fe29f17719480f89dedc91e3f1.jpg"
                alt="Picture of owner."
              />
            </Link>
            <OwnerName>Jyako</OwnerName>
            <NoticeDate>2-2-21</NoticeDate>
          </OwnerAvatarContainer>
        </Header>
        <Content>
          <Description>
            Lost my cat. He's a big cat. Very friendly. Does not bite. Might
            bite.
          </Description>
          <PetPicture
            src={`https://imengine.prod.srp.navigacloud.com/?uuid=75535714-db58-5452-b548-68a17566812e&type=primary&q=72&width=1000`}
            alt="Picture of pet."
          />
        </Content>
        <Footer>
          <SearchersWrapper>
            <SearchersIcon onClick={() => console.log("Clicked")} />
            <SearchersCounter>5 people looking</SearchersCounter>
          </SearchersWrapper>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Notice;
