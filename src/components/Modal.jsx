import React, { useState } from "react";
import Filter from "./Filter";

const Modal = ({ show, handleClose, data }) => {
  if (!show) return null;

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>Questo è il contenuto della modale</h2>
          <p>Puoi inserire qualsiasi contenuto qui.</p>
        </div>
      </div>
      <Filter data={data} />
    </>
  );
};

export default Modal;
