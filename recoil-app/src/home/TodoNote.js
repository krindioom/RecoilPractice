import { Button, Flex } from "antd";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { NotesDataListState } from "../recoil/atoms/atoms";

const TodoNote = ({id, info }) => {

  const [notesList, setNotesList] = useRecoilState(NotesDataListState);

  const deleteNote = () => {
    console.log(id);
      const newList = notesList.filter((item) => item.id !== id);

      setNotesList(newList);
    };

  return (
    <div>
      <Flex>
        <p>{info}</p>
        <Button
          danger
          onClick={(e) => {
            deleteNote();
          }}
        >
          Удалить
        </Button>
      </Flex>
    </div>
  );
};

export default TodoNote;
