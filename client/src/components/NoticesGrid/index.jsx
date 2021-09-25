import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { MdGridOn, MdBookmarkBorder, MdGroup } from "react-icons/md";
import { BsEye } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: solid;
  border-width: 1.5px;
  border-color: #dbdbdb;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 768px) {
    border-top: none;
    border-bottom: solid;
    border-width: 1.5px;
    border-color: #dbdbdb;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  font-size: 16px;
  font-weight: 600;
  color: #919191;
  cursor: pointer;
`;

const Label = styled.div`
  display: flex;
  align-items: center;

  @media only Screen and (max-width: 768px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 267px);
  grid-template-rows: repeat(3, 267px);
  width: 100%;
  margin: 0 auto;
  gap: 21px 21px;

  @media only Screen and (max-width: 992px) {
    grid-template-columns: repeat(3, calc((85vw - 42px) / 3));
    grid-template-rows: repeat(3, calc((85vw - 42px) / 3));
  }

  @media only Screen and (max-width: 768px) {
    border-top: solid;
    border-width: 1.5px;
    border-color: #dbdbdb;

    grid-template-columns: repeat(3, calc((100vw - 6px) / 3));
    grid-template-rows: repeat(3, calc((100vw - 6px) / 3));
    gap: 3px 3px;
  }
`;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  font-size: 24px;
  color: #fff;
`;

const ImageBlock = styled.img`
  // 843px is the max width
  // gap size is 21px so that gives 801px of usable space since there are two gaps per column
  // 801 divided by 3 is 267px, so that is our pixel width
  width: 267px;
  height: 267px;
  object-fit: fill;
  background-color: #000;

  @media only Screen and (max-width: 992px) {
    // 85vw is the max width
    width: calc((85vw - 42px) / 3);
    height: calc((85vw - 42px) / 3);
  }

  @media only Screen and (max-width: 768px) {
    // 85vw is the max width
    width: calc((100vw - 6px) / 3);
    height: calc((100vw - 6px) / 3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  background-color: #000;
  cursor: pointer;
  &:hover ${Overlay} {
    opacity: 1;
  }
  &:hover ${ImageBlock} {
    opacity: 0.5;
  }
`;

const dummyNotices = [
  {
    img: "https://www.boredpanda.com/blog/wp-content/uploads/2018/03/ugly-medieval-cats-art-105-5aafb04871c4f__700.jpg",
    searchers: 0,
  },
];
const dummyLooking = [
  {
    img: "http://static.demilked.com/wp-content/uploads/2018/03/5abc8faf8f5ff-ugly-medieval-cats-art-103-5aafaff5c7b63__700.jpg",
    searchers: 1,
  },
  { img: "https://pbs.twimg.com/media/EMc9HA1UYAETNsV.jpg", searchers: 5 },
  {
    img: "https://i.pinimg.com/474x/af/7c/07/af7c07f8dfe5ab8e0a0e6c3a9296c6ef.jpg",
    searchers: 3,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0344/6469/files/ugly-cat-paintings-10.jpg?v=1531239933",
    searchers: 2,
  },
  {
    img: "https://64.media.tumblr.com/5a5e64aaef56135f2d04379e8ea6fc90/tumblr_ppvfyrvHSW1x4gx38o1_1280.jpg",
    searchers: 1,
  },
];
const dummyFound = [
  {
    img: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/a-pig-in-its-sty-e-m-fox.jpg",
    searchers: 0,
  },
  {
    img: "https://i.pinimg.com/originals/4d/05/84/4d0584628e3abf99e028e8bb87098ac2.jpg",
    searchers: 0,
  },
];

const NoticesGrid = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const renderContent = (contentArr) => {
    return contentArr.map((content) => (
      <ImageContainer>
        <ImageBlock src={content.img} />
        <Overlay>
          <MdGroup style={{ fontSize: "28px" }} /> {content.searchers}
        </Overlay>
      </ImageContainer>
    ));
  };

  return (
    <IconContext.Provider
      value={{
        style: {
          verticalAlign: "middle",
          fontSize: `${useWindowSize().width > 768 ? "20px" : "30px"}`,
          marginRight: "6px",
        },
      }}
    >
      <Container>
        <Tabs>
          <Tab
            style={{
              color: `${toggleState === 1 ? "#000" : "#919191"}`,
              borderTop: `${toggleState === 1 ? "1.5px solid #000" : ""}`,
              marginTop: `${toggleState === 1 ? "-1.5px" : ""}`,
            }}
            onClick={() => toggleTab(1)}
          >
            <MdGridOn />
            <Label>Notices</Label>
          </Tab>
          <Tab
            style={{
              color: `${toggleState === 2 ? "#000" : "#919191"}`,
              borderTop: `${toggleState === 2 ? "1.5px solid #000" : ""}`,
              marginTop: `${toggleState === 2 ? "-1.5px" : ""}`,
            }}
            onClick={() => toggleTab(2)}
          >
            <BsEye />
            <Label>Looking</Label>
          </Tab>
          <Tab
            style={{
              color: `${toggleState === 3 ? "#000" : "#919191"}`,
              borderTop: `${toggleState === 3 ? "1.5px solid #000" : ""}`,
              marginTop: `${toggleState === 3 ? "-1.5px" : ""}`,
            }}
            onClick={() => toggleTab(3)}
          >
            <MdBookmarkBorder />
            <Label>Found</Label>
          </Tab>
        </Tabs>
        <ContentContainer>
          <Grid style={{ display: `${toggleState === 1 ? "grid" : "none"}` }}>
            {renderContent(dummyNotices)}
          </Grid>
          <Grid style={{ display: `${toggleState === 2 ? "grid" : "none"}` }}>
            {renderContent(dummyLooking)}
          </Grid>
          <Grid style={{ display: `${toggleState === 3 ? "grid" : "none"}` }}>
            {renderContent(dummyFound)}
          </Grid>
        </ContentContainer>
      </Container>
    </IconContext.Provider>
  );
};

export default NoticesGrid;
