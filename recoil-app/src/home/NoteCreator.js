import { Button, Modal, Input } from "antd";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { NotesDataListState } from "../recoil/atoms/atoms";

const NoteCreator = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pageText, setPageText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleOpenModal = () => setModalOpen(true);

  const setDataList = useSetRecoilState(NotesDataListState);
  const dataList = useRecoilValue(NotesDataListState);

  const handleOkModal = () => {
    setDataList((old) => {
      const noteId = old.length;

      return inputText ? [
        ...old,
        {
          id: noteId,
          text: inputText,
          date: new Date().toISOString(),
        },
      ] : [...old];

    });

    setInputText("");
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
        onOk={handleOkModal}
        onCancel={() => {
          setModalOpen(false);
        }}
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

export default NoteCreator;
