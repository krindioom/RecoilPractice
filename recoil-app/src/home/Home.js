import React from "react";
import { Flex, Segmented } from "antd";
import TodosTotalInfo from "./TodosTotalInfo";
import DateFilter from "./DateFilter";
import TodoNoteList from "./TodoNoteList";
import NoteCreator from "./NoteCreator";

const Home = () => {
  return (
    <>
      <TodosTotalInfo />
      <DateFilter />
      <TodoNoteList />
      <NoteCreator />
    </>
  );
};

export default Home;
