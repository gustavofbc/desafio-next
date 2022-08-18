import React, { useState } from "react";
import Modal from "react-modal";

export default function ModalInfo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      {/* <button onClick={openModal}>modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="exemplo"
        overlayClassName="modal-overlay"
      >
        <button className="button close" onClick={closeModal}>
          Fechar
        </button>
      </Modal>
    </>
  );
}
