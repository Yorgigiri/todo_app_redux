import React from "react";
import TodoElement from "./TodoElement";


interface ITodo {
    id: string;
    text: string;
    description: string;
}

interface IProps {
    todoList: ITodo[];
}

function TodoList(props: IProps) {
    const { todoList } = props;

    return (
        <>
            {todoList.map((item) => (
                // @ts-ignore
                <TodoElement key={item.id} todo={item} />
            ))}
        </>
    );
}

export default TodoList;