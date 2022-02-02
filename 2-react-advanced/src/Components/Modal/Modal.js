import React from "react";
import { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = e => {
    e.stopPropagation();
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {/* {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>Hello Modale</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores modi cumque
              facere tempore sunt facilis quas quis, vero deleniti nesciunt laboriosam ut eos
              saepe totam laborum consequuntur expedita. Placeat nobis accusamus rem
              perferendis deleniti quam quaerat ratione ad dolorum consectetur, blanditiis
              aspernatur soluta, dolores modi, similique debitis repellendus fuga? Blanditiis?
            </p>
            <button onClick={toggleModal} className="close-modal">
              ❌
            </button>
          </div>
        </div>
      )} */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
