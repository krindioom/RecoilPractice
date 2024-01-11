import React from "react";
import { Flex, Segmented } from "antd";
import TodosTotalInfo from "./home/TodosTotalInfo";
import DateFilter from "./home/DateFilter";
import TodoNoteList from "./home/TodoNoteList";
import NoteCreation from "./home/NoteCreation";

const Home = () => {
  return (
    <>
      <TodosTotalInfo />
      <DateFilter />
      <TodoNoteList />
      <NoteCreation />
    </>
  );
};

export default Home;
