import { useRef, useEffect, useCallback } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 800px;
  height: 500px;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 99;
  border-radius: 10px;
  border: solid;
  border-width: thin;
  border-color: #dbdbdb;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
`;

const CloseModal = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const LocationModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef;

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalContainer>
            <ModalMap></ModalMap>
            <InputsWrapper></InputsWrapper>
          </ModalContainer>
          <CloseModal
            area-label="Close modal"
            onClick={() => setShowModal((prev) => !prev)}
          />
        </Background>
      ) : null}
    </>
  );
};

export default LocationModal;
