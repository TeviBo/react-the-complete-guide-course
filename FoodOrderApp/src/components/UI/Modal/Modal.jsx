import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => <div className={classes.backdrop} />;

const ModalOverlay = ({ children }) => (
   <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
   </div>
);

ModalOverlay.propTypes = {
   children: PropTypes.array.isRequired
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children }) => (
   <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
   </>
);

Modal.propTypes = {
   children: PropTypes.array.isRequired
};

export default Modal;
