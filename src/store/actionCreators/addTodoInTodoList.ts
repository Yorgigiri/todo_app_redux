import ADD_TODO_IN_TODO_LIST from "../actions/addTodoInTodoList";


interface ITodo {
    id: string;
    title: string;
    description: string;
}

const addTodoInTodoList = (todo: ITodo) => {
    return ({
        type: ADD_TODO_IN_TODO_LIST,
        payload: todo,
    })
}

export default addTodoInTodoList;