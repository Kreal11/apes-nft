import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import { ContentWrapper, StyledWrapper } from "./Modal.styled";
import PropTypes from "prop-types";

const rootModal = document.querySelector("#modal");

const Modal = ({ children, closeModal }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal, handleKeyDown]);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  if (rootModal) {
    return ReactDOM.createPortal(
      <StyledWrapper onClick={handleBackDrop}>
        <ContentWrapper>{children}</ContentWrapper>
      </StyledWrapper>,
      rootModal
    );
  }

  return null;
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};
