import React, { useState } from "react";
import { Modal as BaseModal } from "react-modal";

//Modal opens based on the isOpen prop
// isOpen prop is passed in openModal state variable
// onRequestClose of modal sets openModal to false

const Modal = ({ open }) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <BaseModal
      isOpen={true}
      // onRequestClose={() => setIsOpen(false)}
      ariaHideApp={false}
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
      Hello
    </BaseModal>
  );
};

export default Modal;
