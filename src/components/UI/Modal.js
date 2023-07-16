import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const OverlayModal = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OverlayModal>{props.children}</OverlayModal>,
        document.getElementById('overlay-root')
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        document.getElementById('backdrop-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
