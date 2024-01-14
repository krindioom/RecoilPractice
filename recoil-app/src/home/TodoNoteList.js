import TodoNote from "./TodoNote";
import { useRecoilValue } from "recoil";
import { NotesDataListState } from "../recoil/atoms/atoms";
import { DateFilterSelector } from "../recoil/selectors/selectors";

const TodoNoteList = () => {
    const noteFilter = useRecoilValue(DateFilterSelector);
    const elems = useRecoilValue(NotesDataListState);

    const filteredNotes = noteFilter.filterAction(elems);
    const notes = filteredNotes.map((item) => {
        return (
            <TodoNote
                id={item.id}
                key={item.id}
                info={`${item.text} | ${item.date}`}
            />
        );
    });

    return <div>{notes}</div>;
};

export default TodoNoteList;
