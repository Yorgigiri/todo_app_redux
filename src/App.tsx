import React from 'react';
import './App.css';
import { Container } from "@mui/material";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import {connect} from "react-redux";


interface ITodo {
    id: string;
    text: string;
    description: string;
}

interface IProps {
    todoList: ITodo[];
}

function App(props: IProps) {
  return (
    <Container maxWidth="sm">
        <AddTodoForm />
        <TodoList todoList={props.todoList}/>
    </Container>
  );
}

const mapStateToProps = (state: { todoList: ITodo[] }) => {

    console.log('state: ', state);
    return {
        todoList: state.todoList
    };
}

export default connect(mapStateToProps)(App);
