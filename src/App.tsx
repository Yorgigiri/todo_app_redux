import React from 'react';
import './App.css';
import {Container} from "@mui/material";
import AddTodoForm from "./components/Todo/AddTodoForm";
import TodoList from "./components/Todo/TodoList";
import {connect} from "react-redux";
import useNotification from "./hooks/useNotification";


interface ITodo {
    id: string;
    title: string;
    description: string;
}

interface IProps {
    todoList: ITodo[];
}

function App(props: IProps) {
    const notification = useNotification();

    return (
        <Container maxWidth="sm">
            {notification}
            <AddTodoForm/>
            <TodoList todoList={props.todoList}/>
        </Container>
    );
}

const mapStateToProps = (state: { todoList: ITodo[] }) => {
    return {
        todoList: state.todoList
    };
}

export default connect(mapStateToProps)(App);
