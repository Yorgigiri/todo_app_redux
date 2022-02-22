import React from "react";
import TodoElement from "./TodoElement";


interface ITodo {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
}

interface IProps {
    todoList: ITodo[];
}

function TodoList(props: IProps) {
    const {todoList} = props;

    return (
        <>
            {todoList.map(({id, title, description, isCompleted}) => {
                console.log('isCompleted: ', isCompleted);


                return (
                    <TodoElement
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        isCompleted={isCompleted}
                    />
                );
            })}
        </>
    );
}

export default TodoList;