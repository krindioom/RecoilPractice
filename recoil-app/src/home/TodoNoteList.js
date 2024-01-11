import React, { useEffect, useState } from 'react'
import TodoNote from './TodoNote';

const elems = [
    {
        text: 'nothing',
    },
    {
        text: 'nothing1',
    },
    {
        text: 'nothing2',
    },
];

const TodoNoteList = () => {
    const [todoNotes, setTodoNotes] = useState([]);

    useEffect(() => {
        setTodoNotes(elems);
    }, []);

    const filteredNotes = todoNotes.map((item, index) => {
        return <TodoNote key={index} info={item.text} />
    });

    return (
        <div>{filteredNotes}</div>
    )
}

export default TodoNoteList