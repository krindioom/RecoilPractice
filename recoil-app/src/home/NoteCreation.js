import { Button, Modal, Input } from "antd";
import React, { useState } from "react";

const NoteCreation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pageText, setPageText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => {
    setPageText(inputText);
    setModalOpen(false);
  };

  const handleInputChange = (e) => setInputText(e.target.value);

  return (
    <>
      <Button onClick={handleOpenModal}>Добавить</Button>

      <Modal
        title="Добавить"
        style={{ top: 20 }}
        open={modalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <Input
          placeholder="Введите задачу"
          value={inputText}
          onChange={handleInputChange}
        />
      </Modal>
      <p>{pageText}</p>
    </>
  );
};

export default NoteCreation;
