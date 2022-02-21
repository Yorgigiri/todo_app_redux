import React from "react";
import TodoElement from "./TodoElement";


interface ITodo {
    id: string;
    title: string;
    description: string;
}

interface IProps {
    todoList: ITodo[];
}

function TodoList(props: IProps) {
    const {todoList} = props;

    return (
        <>
            {todoList.map(({id, title, description}) =>
                <TodoElement id={id} title={title} description={description} key={id}/>
            )}
        </>
    );
}

export default TodoList;