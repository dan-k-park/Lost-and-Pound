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

const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
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

const ShorterInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  @media only Screen and (max-width: 960px) {
    width: 80%;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  @media only Screen and (max-width: 640px) {
    width: 80%;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
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

const Name = styled.input`
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
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border-radius: 5px;
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
  const [file, setFile] = useState(null);
  const [calendarPosition, setCalendarPosition] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openMapModal, setOpenMapModal] = useState(false);

  const handleCalendarClick = (e) => {
    setCalendarPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleCalendarChange = () => {
    setCalendarPosition({});
  };

  const RenderReviewModal = () => {
    return (
      <Modal
        isOpen={openModal}
        ariaHideApp={false}
        onRequestClose={() => setOpenModal(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            margin: "auto",
            height: "300px",
            width: "300px",
            display: "flex",
            justifyContent: "center",
            border: "1px solid #dbdbdb",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
          },
        }}
      >
        <h2>Review Modal</h2>
      </Modal>
    );
  };
  const RenderMapModal = () => {
    return (
      <Modal
        isOpen={openMapModal}
        ariaHideApp={false}
        onRequestClose={() => setOpenMapModal(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            margin: "auto",
            height: "300px",
            width: "300px",
            display: "flex",
            justifyContent: "center",
            border: "1px solid #dbdbdb",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
          },
        }}
      >
        <h2>Map Modal</h2>
      </Modal>
    );
  };

  return (
    <Container>
      <Wrapper>
        <TopHalf>
          <UserAvatar
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Pseudobiceros_hancockanus.jpg"
            alt="User profile picture."
          />
          <InputsWrapper>
            <ShorterInputs>
              <Name placeholder="Name" ref={name} />
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
          </InputsWrapper>
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
        <Form>
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
            <Option>
              <MdAddLocation
                style={{ fontSize: "18px", marginRight: "3px", color: "green" }}
              />
              <OptionText onClick={() => setOpenMapModal(true)}>
                Location
              </OptionText>
            </Option>
          </Options>
          <CreateButton onClick={() => setOpenModal(true)}>Review</CreateButton>
        </Form>
      </Wrapper>
      {RenderReviewModal()}
      {RenderMapModal()}
    </Container>
  );
};

export default CreateNotice;
