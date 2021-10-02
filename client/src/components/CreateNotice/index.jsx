import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  MdCancel,
  MdPermMedia,
  MdDateRange,
  MdAddLocation,
} from "react-icons/md";
import Modal from "react-modal";

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  border: thin solid var(--borderColor);
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const TopHalf = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const InfoInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: 200px;
  width: 90%;
  @media only Screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-end
    gap: 10px;
  }
  @media only Screen and (max-width: 640px) {
    gap: 10px;
      margin-bottom: 10px;
  }
`;

const DescriptiveInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShorterInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  // @media only Screen and (max-width: 960px) {
  //   width: 80%;
  //   flex-direction: row;
  //   align-items: center;
  //   gap: 10px;
  // }
  // @media only Screen and (max-width: 640px) {
  //   width: 80%;
  //   flex-direction: column;
  //   align-items: center;
  //   width: 100%;
  // }
`;

const Species = styled.select`
  width: 80%;
  padding: 5px;
  font-size: 14px;
  border: solid;
  border-width: 1.5px;
  border-color: var(--borderColor);
  border-radius: 3px;
  background-color: var(--backgroundColor);
  color: #747474;
  option {
    color: #747474;
    background: var(--backgroundColor);
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  @media only Screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

const Description = styled.textarea`
  border: solid;
  border-width: 1.5px;
  border-color: var(--borderColor);
  border-radius: 3px;
  background-color: var(--backgroundColor);
  resize: none;
  width: 80%;
  height: 84px;
  padding: 10px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  @media only Screen and (max-width: 960px) {
    font-size: 12px;
    height: 120px;
  }
`;

const Input = styled.input`
  border: solid;
  border-width: 1.5px;
  border-color: var(--borderColor);
  border-radius: 3px;
  background-color: var(--backgroundColor);
  padding: 5px;
  font-size: 14px;
  width: 80%;
  &:focus {
    outline: none;
  }
  @media only Screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

const ImageContainer = styled.div`
  padding: 0 20px 10px 20px;
  position: relative;
`;

const PreviewImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Cancel = styled(MdCancel)`
  position: absolute;
  top: 0;
  right: 20;
  cursor: pointer;
  opacity: 0.7;
  font-size: 24px;
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: ${(props) => (props.locationForm ? "column" : "row")};
  align-items: center;
  justify-content: ${(props) =>
    props.locationForm ? "flex-start" : "space-between"};
`;

const Options = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;

const OptionText = styled.span`
  font-size: clamp(11px, 1.1vw, 14px);
  font-weight: 500;
  @media only Screen and (max-width: 960px) {
    display: none;
  }
`;

const CreateButton = styled.button`
  padding: 8px 8px 8px 8px;
  border-radius: 4px;
  border: none;
  background-color: var(--submitButton);
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  color: white;
  width: 80px;
`;

const Divider = styled.hr`
  margin: 20px 0 20px 0;
  width: 100%;
  border: solid;
  border-width: thin;
  border-color: #dbdbdb;
`;
const CreateNotice = () => {
  const description = useRef();
  const name = useRef();
  const location = useRef();
  const [file, setFile] = useState(null);
  const [calendarPosition, setCalendarPosition] = useState({});

  const handleCalendarClick = (e) => {
    setCalendarPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleCalendarChange = () => {
    setCalendarPosition({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNotice = {};
  };

  return (
    <Container>
      <Wrapper>
        <TopHalf>
          <UserAvatar
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Pseudobiceros_hancockanus.jpg"
            alt="User profile picture."
          />
          <InfoInputsContainer>
            <DescriptiveInputs>
              <ShorterInputs>
                <Input placeholder="Name" ref={name} />
                <Species>
                  <option value="" hidden>
                    Species
                  </option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="rabbit">Rabbit</option>
                  <option value="hamster">Hamster</option>
                  <option value="tortoise">Tortoise</option>
                  <option value="other">Other</option>
                </Species>
              </ShorterInputs>
              <Description
                placeholder="Describe your pet here"
                maxLength="150"
                ref={description}
              />
            </DescriptiveInputs>
            <Input
              placeholder="Street/neighborhood and City where your pet was last seen"
              ref={location}
            />
          </InfoInputsContainer>
        </TopHalf>
        <Divider />
        {file && (
          <ImageContainer>
            <PreviewImage
              src={URL.createObjectURL(file)}
              alt="Preview image of pet."
            />
            <Cancel onClick={() => setFile(null)} />
          </ImageContainer>
        )}
        <Form onSubmit={handleSubmit}>
          <Options>
            <Option htmlFor="file">
              <MdPermMedia
                style={{
                  fontSize: "18px",
                  marginRight: "3px",
                  color: "tomato",
                }}
              />
              <OptionText>Photo</OptionText>
              <input
                type="file"
                style={{ display: "none" }}
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Option>
            <Option>
              <MdDateRange
                style={{ fontSize: "18px", marginRight: "3px", color: "blue" }}
              />
              <OptionText>Last Seen</OptionText>
              <input
                type="date"
                style={{
                  opacity: 0,
                  zIndex: -10,
                  position: "absolute",
                  top: `${calendarPosition.x}`,
                  left: `${calendarPosition.y}`,
                }}
                onClick={handleCalendarClick}
                onChange={handleCalendarChange}
              />
            </Option>
          </Options>
          <CreateButton onClick={() => console.log("hello")}>Post</CreateButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default CreateNotice;
