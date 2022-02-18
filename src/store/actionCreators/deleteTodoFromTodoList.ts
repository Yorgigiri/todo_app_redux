import DELETE_TODO_FROM_TODO_LIST from "../actions/deleteTodoFromTodoList";


interface ITodo {
    id: string;
    title: string;
    description: string;
}

const deleteTodoFromTodoList = (todo: ITodo) => {

    console.log('todo:', todo);
    return ({
        type: DELETE_TODO_FROM_TODO_LIST,
        payload: todo,
    })
}

export default deleteTodoFromTodoList;