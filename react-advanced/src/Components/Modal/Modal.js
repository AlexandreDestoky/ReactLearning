import React from "react";
import { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modale</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores modi cumque facere tempore sunt facilis quas quis, vero
                deleniti nesciunt laboriosam ut eos saepe totam laborum consequuntur expedita. Placeat nobis accusamus rem perferendis
                deleniti quam quaerat ratione ad dolorum consectetur, blanditiis aspernatur soluta, dolores modi, similique debitis
                repellendus fuga? Blanditiis?
              </p>
              <button onClick={toggleModal} className="close-modal">
                ❌
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
