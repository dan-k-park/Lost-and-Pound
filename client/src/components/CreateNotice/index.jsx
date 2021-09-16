import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  MdCancel,
  MdPermMedia,
  MdDateRange,
  MdAddLocation,
} from "react-icons/md";

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
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

  @media only Screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const ShorterInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only Screen and (max-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Species = styled.select`
  width: 50%;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: solid;
  border-width: thin;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Description = styled.textarea`
  border: none;
  width: 80%;

  &:focus {
    outline: none;
  }
`;

const Name = styled.input`
  border: none;
  width: 40%;

  &:focus {
    outline: none;
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
  border: none;
  padding: 7px;
  border-radius: 5px;
  background-color: limegreen;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  color: white;
`;

const CreateNotice = () => {
  const description = useRef();
  const name = useRef();
  const [file, setFile] = useState(null);

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
              <Name placeholder="Pet name" ref={name} />
              <Species>
                <option value="" hidden>
                  Pet Species
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
              ref={description}
            />
          </InputsWrapper>
        </TopHalf>
        <hr style={{ margin: "20px" }} />
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
              <input type="date" style={{ display: "none" }} />
            </Option>
            <Option>
              <MdAddLocation
                style={{ fontSize: "18px", marginRight: "3px", color: "green" }}
              />
              <OptionText>Location</OptionText>
            </Option>
          </Options>
          <CreateButton type="submit">Create Notice</CreateButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default CreateNotice;
