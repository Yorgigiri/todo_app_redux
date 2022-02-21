import DELETE_TODO_FROM_TODO_LIST from "../actions/deleteTodoFromTodoList";


const deleteTodoFromTodoList = (todoId: string) => {
    return ({
        type: DELETE_TODO_FROM_TODO_LIST,
        payload: todoId,
    })
}

export default deleteTodoFromTodoList;